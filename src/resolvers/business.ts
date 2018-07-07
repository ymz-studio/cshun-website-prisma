import { Context } from '../utils';
import { BusinessCreateInput } from '../generated/prisma';

export const Query = {
	async businesses(parent, args, ctx: Context, info) {
		return await ctx.db.query.businesses(args, info);
	}
};

export const Mutation = {
	async createBusiness(parent, args: { data: BusinessCreateInput }, ctx: Context, info) {
		
		if (!/^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?$/.test(args.data.url)) throw new Error('链接不合法');
		if (args.data.name.length > 15) throw new Error('商家名需在15字以内');
		return await ctx.db.mutation.createBusiness(args, info);
	},
	async updateBusiness(parent, args, ctx: Context, info) {
		return await ctx.db.mutation.updateBusiness(args, info);
	},
	async deleteBusiness(parent, args, ctx: Context, info) {
		return await ctx.db.mutation.deleteBusiness(args, info);
	}
};
