import { Context } from '../utils';
import { ExpertCreateInput } from '../generated/prisma';

export const Query = {
	async experts(parent, args, ctx: Context, info) {
		return await ctx.db.query.experts(args, info);
	}
};

export const Mutation = {
	async createExpert(parent, args: { data: ExpertCreateInput }, ctx: Context, info) {
		
		if (args.data.name.length > 15) throw new Error('专家需在15字以内');
		return await ctx.db.mutation.createExpert(args, info);
	},
	async updateExpert(parent, args, ctx: Context, info) {
		return await ctx.db.mutation.updateExpert(args, info);
	},
	async deleteExpert(parent, args, ctx: Context, info) {
		return await ctx.db.mutation.deleteExpert(args, info);
	}
};
