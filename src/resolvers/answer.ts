import { Context } from '../utils';
import { AnswerCreateInput } from '../generated/prisma';

export const Query = {
}

export const Mutation = {
	async createAnswer(parent, args: { data: AnswerCreateInput }, ctx: Context, info) {
		return await ctx.db.mutation.createAnswer(args, info);
	},
	async updateAnswer(parent, args, ctx: Context, info) {
		return await ctx.db.mutation.updateAnswer(args, info);
	},
	async deleteAnswer(parent, args, ctx: Context, info) {
		return await ctx.db.mutation.deleteAnswer(args, info);
	}
};
