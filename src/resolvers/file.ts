import { Context } from "../utils";
import { Stream } from "stream";
import { createWriteStream, createReadStream, statSync, exists } from "fs";
import * as path from "path";
import * as shortid from "shortid";
import * as COS from "cos-nodejs-sdk-v5";
import * as Minio from "minio";

const BUCKET_NAME = process.env.MINIO_BUCKET_NAME;
const minioClient: PromiseLike<Minio.Client> = new Promise(
	(resolve, reject) => {
		const client = new Minio.Client({
			endPoint: process.env.MINIO_ENDPOINT,
			port: parseInt(process.env.MINIO_PORT, 10),
			secure: process.env.MINIO_USE_SECURE.toLocaleLowerCase() === "true",
			accessKey: process.env.MINIO_ACCESS_KEY,
			secretKey: process.env.MINIO_SECRET_KEY
		});

		client.bucketExists(BUCKET_NAME, (err, exists) => {
			if (err) {
				console.log(err);
				process.exit(1);
			}
			if (!exists) {
				client.makeBucket(BUCKET_NAME, "", function() {
					resolve(client);
				});
			} else {
				resolve(client);
			}
		});
	}
);
const cos = new COS({
	SecretId: process.env.COS_SECRET_ID,
	SecretKey: process.env.COS_SECRET_KEY
});

interface Upload {
	stream: Stream;
	filename: string;
	mimetype: string;
	encoding: string;
}

export const Query = {
	uploads(parent, args, ctx: Context, info) {
		return ctx.db.query.files({}, info);
	},
	async fileObject(parent, {filename}, ctx: Context, info){
		const client = await minioClient;
		return await client.presignedGetObject(BUCKET_NAME,filename);
	}
};
// 本地缓存
const saveUpload = async (file: Upload) => {
	const cacheID = shortid.generate() + "-" + file.filename;
	const cachePath = path.join(
		path.dirname(require.main.filename),
		".cache",
		cacheID
	);
	await new Promise((resolve, reject) =>
		file.stream.pipe(
			createWriteStream(cachePath)
				.on("close", resolve)
				.on("error", reject)
		)
	);
	const ContentLength = statSync(cachePath).size;
	return { cachePath, cacheID, ContentLength };
};

const putToCos = async ({ cachePath, cacheID, ContentLength }) => {
	const data = await new Promise((resolve, reject) => {
		cos.putObject(
			{
				Bucket: "cshun-1253962968",
				Region: "ap-chengdu",
				Key: cacheID,
				ContentLength, // File Size
				Body: createReadStream(cachePath),
				onProgress(progress) {
					console.log(progress);
				}
			},
			(err, data) => {
				if (err) {
					console.error(err);
					reject(err.toString());
				} else resolve(data);
			}
		);
	});
	return data["Location"];
};
export const Mutation = {
	async singleUpload(parent, args: { file: Upload }, ctx: Context, info) {
		const file = await args.file;
		const ContentLength = parseInt(ctx.request.get("Content-Length"));
		// COS不允许转发文件流, 需要现在本地做缓存
		const url = await putToCos(await saveUpload(file));
		return await ctx.db.mutation.createFile(
			{
				data: {
					filename: file.filename,
					mimetype: file.mimetype,
					encoding: file.encoding,
					url
				}
			},
			info
		);
	},
	async createFileObjectRequest(
		parent,
		args: { filename: string; mimeType: string },
		ctx: Context,
		info
	) {
		//TODO: find a method to handle file metadata via `presignedUrl` upload.
		const client = await minioClient;
		const filename = `${Date.now()}_${args.filename}`;
		const presignedUrl = await client.presignedPutObject(BUCKET_NAME, filename);
		return { filename, presignedUrl };
	}
};
