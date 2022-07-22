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

async function findOrCreateUser(email, nickname) {
	const user = await userModel.findOne({ email });

	if (user) {
		return user;
	}

	// TODO: 데이터가 올바르게 들어가도록 수정
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
		// for debug
		console.log('naver profile', profile);

		const nickname = profile.email;
		const email = profile.name;

		// TODO: done함수 인자값 수정 필요한지 생각하기
		try {
			const user = await findOrCreateUser(nickname, email);
			done(null, user);
		} catch (error) {
			console.error(error);
			done(error);
		}
	},
);
