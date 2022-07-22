import 'dotenv/config';
import { userModel } from '../db/index.js';
import { Strategy as KakaoStrategy } from 'passport-kakao';

const config = {
	clientID: process.env.KAKAO_ID, // 카카오 로그인에서 발급받은 REST API 키
	callbackURL: '/api/auth/kakao/callback', // 카카오 로그인 Redirect URI 경로
};

//#region func:findOrCreateUser
const provider = 'KAKAO';

async function findOrCreateUser(nickname, email) {
	const userInfo = { email, provider };
	const user = await userModel.findOne(userInfo);

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

export const kakao = new KakaoStrategy(
	config,

	async (accessToken, refreshToken, profile, done) => {
		const nickname = profile._json.properties.nickname;
		const email = profile._json.kakao_account.email;

		// TODO: done 함수 인자값 수정 필요한지 생각하기
		try {
			const user = await findOrCreateUser(nickname, email);
			done(null, user);
		} catch (error) {
			console.error(error);
			done(error);
		}
	},
);
