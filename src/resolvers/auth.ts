import { getUserId, Context, AuthError } from '../utils';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

export const Query = {
	me(parent, args, ctx: Context, info) {
		const id = getUserId(ctx);
		return ctx.db.query.user({ where: { id } }, info);
	}
};

export const Mutation = {
	async login(parent, { name, password }, ctx: Context, info) {
		const user = await ctx.db.query.user({ where: { name } });
		if (!user) {
			throw new Error(`未找到此用户: ${name}`);
		}

		const valid = await bcrypt.compare(password, user.password);
		if (!valid) {
			throw new Error('密码错误, 请重新输入');
		}
		await ctx.db.mutation.updateUser({ where: { name }, data: { lastLoginAt: new Date() } });
		return {
			token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
			user
		};
	},
	async signUp(parent, { data }, ctx: Context, info) {
		const password = bcrypt.hashSync(data.password, 10);
		const user = await ctx.db.mutation.createUser({
			data: { ...data, password, role: { set: [ 'CUSTOMER' ] } }
		});

		return {
			token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
			user
		};
	}
};

export const AuthPayload = {
	async user({ user: { id } }, args, ctx: Context, info) {
		return ctx.db.query.user({ where: { id } }, info);
	}
};
