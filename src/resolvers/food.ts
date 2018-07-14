import { Context } from '../utils';
import { FoodCreateInput } from '../generated/prisma';
import { isURL, isLength } from 'validator';

function validateInput({ name }) {
	if (!isLength(name, { min: 2, max: 15 })) throw new Error('食物名称长度应大于2小于15');
}

export const Query = {
	async foods(parent, args, ctx: Context, info) {
		return await ctx.db.query.foods(args, info);
	}
};

export const Mutation = {
	async createFood(parent, args: { data: FoodCreateInput }, ctx: Context, info) {
		validateInput(args.data);
		return await ctx.db.mutation.createFood(args, info);
	},
	async updateFood(parent, args, ctx: Context, info) {
		validateInput(args.data);
		return await ctx.db.mutation.updateFood(args, info);
	},
	async deleteFood(parent, args, ctx: Context, info) {
		return await ctx.db.mutation.deleteFood(args, info);
	}
};
