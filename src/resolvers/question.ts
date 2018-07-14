import { Context } from '../utils';
import { QuestionCreateInput } from '../generated/prisma';

export const Query = {
	async questions(parent, args, ctx: Context, info) {
		return await ctx.db.query.questions(args, info);
	}
};

export const Mutation = {
	async createQuestion(parent, args: { data: QuestionCreateInput }, ctx: Context, info) {
		return await ctx.db.mutation.createQuestion(args, info);
	},
	async updateQuestion(parent, args, ctx: Context, info) {
		return await ctx.db.mutation.updateQuestion(args, info);
	},
	async deleteQuestion(parent, args, ctx: Context, info) {
		return await ctx.db.mutation.deleteQuestion(args, info);
	}
};
