import { Router } from 'express';
import passport from 'passport';
import { setUserToken } from '../utils/index.js';

const authRouter = Router();

authRouter.get('/kakao', passport.authenticate('kakao'));

authRouter.get(
	'/kakao/callback',
	passport.authenticate('kakao', {
		failureRedirect: '/', // kakaoStrategy에서 실패한다면 실행
		session: false,
	}),
	// kakaoStrategy에서 성공한다면 콜백 실행
	(req, res) => {
		try {
			setUserToken(req.user, res);
		} catch (err) {
			console.log(err);
			next(err);
		}
	},
);

//구글 로그인

// 구글로 로그인하기 라우터*************
authRouter.get(
	'/google',
	passport.authenticate('google', { scope: ['profile', 'email'] }),
); // 프로필과 이메일 정보를 받는다

//위에서 구글 서버 로그인이 되면, redirect url 설정에 따라 이쪽 라우터로 오게 된다. 인증코드 받음
authRouter.get(
	'/google/callback',
	passport.authenticate('google', { session: false }), //그리고 passport 로그인 전략에 의해 googleStrategy로 가서 구글계정 정보와 DB를 비교해서 회원가입시키거나 로그인 처리하게 한다
	async (req, res, next) => {
		try {
			setUserToken(req.user, res);
		} catch (err) {
			next(err);
		}
	},
);

// naver 로그인
authRouter.get(
	'/naver',
	passport.authenticate('naver', { authType: 'reprompt' }),
);

authRouter.get(
	'/naver/callback',

	passport.authenticate('naver', {
		failureRedirect: '/',
		session: false,
	}),

	async (req, res, next) => {
		try {
			setUserToken(req.user, res);
		} catch (err) {
			next(err);
		}
	},
);

export { authRouter };
