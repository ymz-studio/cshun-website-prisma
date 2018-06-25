import { getUserId, Context, AuthError } from '../utils';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
export const Mutation = {
	async subAdminSignUp(parent, { data }, ctx: Context, info) {
		const user = await ctx.db.mutation.createUser({
			data: { ...data, password: bcrypt.hashSync(data.password, 10) }
		});
		return {
			token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
			user
		};
	}
};
