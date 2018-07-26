import { Context } from '../utils';
import { HotelCreateInput } from '../generated/prisma';
import {isURL,isLength} from 'validator';
function validateInput({url,name}){
	if (!isURL(url)) throw new Error("URL格式错误");
	if (!isLength(name,{min:2,max:15})) throw new Error("酒店名称长度应大于2小于15");
}
export const Query = {
	async hotels(parent, args, ctx: Context, info) {
		return await ctx.db.query.hotels(args, info);
	}
};

export const Mutation = {
	async createHotel(parent, args: { data: HotelCreateInput }, ctx: Context, info) {
		validateInput(args.data);
		return await ctx.db.mutation.createHotel(args, info);
	},
	async updateHotel(parent, args, ctx: Context, info) {
		validateInput(args.data);
		return await ctx.db.mutation.updateHotel(args, info);
	},
	async deleteHotel(parent, args, ctx: Context, info) {
		return await ctx.db.mutation.deleteHotel(args, info);
	}
};
