import { getUserId, Context, AuthError } from '../utils';
import { Stream } from 'stream';
import { createWriteStream, createReadStream, statSync } from 'fs';
import * as path from 'path';
import * as shortid from 'shortid';
const COS = require('cos-nodejs-sdk-v5');
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
	}
};
// 本地缓存
const saveUpload = async (file: Upload) => {
	const cacheID = shortid.generate() + '-' + file.filename;
	const cachePath = path.join(path.dirname(require.main.filename), '.cache', cacheID);
	await new Promise((resolve, reject) =>
		file.stream.pipe(createWriteStream(cachePath).on('close', resolve).on('error', reject))
	);
	const ContentLength = statSync(cachePath).size;
	return { cachePath, cacheID, ContentLength };
};
// 上传至COS
const putToCos = async ({ cachePath, cacheID, ContentLength }) => {
	const data = await new Promise((resolve, reject) => {
		cos.putObject(
			{
				Bucket: 'cshun-1253962968',
				Region: 'ap-chengdu',
				Key: cacheID,
				ContentLength,
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
	return data['Location'];
};

export const Mutation = {
	async singleUpload(parent, args: { file: Upload }, ctx: Context, info) {
		const file = await args.file;
		const ContentLength = parseInt(ctx.request.get('Content-Length'));
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
	}
};
