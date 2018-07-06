import { Context } from '../utils';
import { BusinessCreateInput } from '../generated/prisma';

export const Query = {
	async businesses(parent, args, ctx: Context, info) {
		return await ctx.db.query.businesses(args, info);
	}
};

export const Mutation = {
	async createBusiness(parent, args: { data: BusinessCreateInput }, ctx: Context, info) {
		if (
			!/^(([0\+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/.test(args.data.tel) &&
			!/^(1(([35][0-9])|(47)|[8][01236789]))\d{8}$/.test(args.data.tel)
		)
			throw new Error('商家联系方式不合法');
		if (!/^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?$/.test(args.data.url)) throw new Error('链接不合法');
		if (args.data.name.length > 15) throw new Error('商家名需在15字以内');
		if (args.data.description.length > 50) throw new Error('商家描述需在50字以内');
		return await ctx.db.mutation.createBusiness(args, info);
	},
	async updateBusiness(parent, args, ctx: Context, info) {
		return await ctx.db.mutation.updateBusiness(args, info);
	},
	async deleteBusiness(parent, args, ctx: Context, info) {
		return await ctx.db.mutation.deleteBusiness(args, info);
	},
	async upsertBusiness(parent, args, ctx: Context, info) {
		return await ctx.db.mutation.upsertBusiness(args, info);
	},
	async updateManyBusinesses(parent, args, ctx: Context, info) {
		return await ctx.db.mutation.updateManyBusinesses(args, info);
	},
	async deleteManyBusinesses(parent, args, ctx: Context, info) {
		return await ctx.db.mutation.deleteManyBusinesses(args, info);
	}
};
