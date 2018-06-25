import { Context, getUserId } from '../utils';
import * as bcrypt from 'bcryptjs';
export const Mutation = {
	updateProfile(parent, { data }, ctx: Context, info) {
		return ctx.db.mutation.updateUser(
			{
				where: { id: getUserId(ctx) },
				data: { ...data, password: bcrypt.hashSync(data.password, 10) }
			},
			info
		);
	}
};
