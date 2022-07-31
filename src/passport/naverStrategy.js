import 'dotenv/config';
import { userModel } from '../db/index.js';
import { Strategy as NaverStrategy } from 'passport-naver-v2';

const config = {
	clientID: process.env.NAVER_ID,
	clientSecret: process.env.NAVER_SECRET,
	callbackURL: '/api/auth/naver/callback',
};

//#region func:findOrCreateUser
const provider = 'naver';

async function findOrCreateUser(nickname, email) {
	const user = await userModel.findOne({ email, provider });

	if (user) {
		return user;
	}

	const createdUser = await userModel.create({
		nickname,
		email,
		provider,
	});

	return createdUser;
}
//#endregion

export const naver = new NaverStrategy(
	config,

	async (accessToken, refreshToken, profile, done) => {
		const nickname = profile.name;
		const email = profile.email;

		try {
			const user = await findOrCreateUser(nickname, email);
			done(null, user);
		} catch (error) {
			console.error(error);
			done(error);
		}
	},
);
