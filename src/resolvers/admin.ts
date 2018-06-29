import { getUserId, Context, AuthError } from '../utils';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

export const Query = {
	async users(parent, args, ctx: Context, info) {
		return await ctx.db.query.users(args, info);
	}
};

export const Mutation = {
	async subAdminSignUp(parent, { data }, ctx: Context, info) {
		if (await ctx.db.exists.User({ name: data.name })) {
			throw Error('用户已存在');
		} else {
			const user = await ctx.db.mutation.createUser({
				data: { ...data, password: bcrypt.hashSync(data.password, 10) }
			});
			return {
				token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
				user
			};
		}
	},
	async subAdminUpdate(parent, { id, data }, ctx: Context, info) {
		if (await ctx.db.exists.User({ name: data.name, id_not: id })) {
			throw Error('用户已存在');
		}
		if (data.password) {
			data.password = bcrypt.hashSync(data.password, 10);
		}

		return await ctx.db.mutation.updateUser(
			{
				where: { id },
				data
			},
			info
		);
	},
	async subAdminDelete(parent, { id }, ctx: Context, info) {
		return await ctx.db.mutation.deleteUser({ where: { id } }, info);
	}
};
