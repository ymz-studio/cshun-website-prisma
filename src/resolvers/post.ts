import { Context } from '../utils';
import { PostCreateInput } from '../generated/prisma';

export const Query = {
	async posts(parent, args, ctx: Context, info) {
		return await ctx.db.query.posts(args, info);
	}
};

export const Mutation = {
	async createPost(parent, args: { data: PostCreateInput }, ctx: Context, info) {
		return await ctx.db.mutation.createPost(args, info);
	},
	async updatePost(parent, args, ctx: Context, info) {
		return await ctx.db.mutation.updatePost(args, info);
	},
	async deletePost(parent, args, ctx: Context, info) {
		return await ctx.db.mutation.deletePost(args, info);
	}
};
