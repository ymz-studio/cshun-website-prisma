import { AuthError, getUserId, Context } from './utils';

export default {
	async hasRole(next, source, { role }, ctx: Context) {
		const user = await ctx.db.query.user({ where: { id: getUserId(ctx) } }, `{role}`);
		if (!user) throw new AuthError();
		for (let item in role) {
			if (user.role.includes(role[item])) return next();
		}
		throw new AuthError();
	},
	async isAuthenticated(next, source, args, ctx: Context) {
		const user = await ctx.db.query.user({ where: { id: getUserId(ctx) } });
		if (user) return next();
		else throw new AuthError();
	}
};
