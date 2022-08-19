import { Router } from 'express';
import passport from 'passport';
import { setUserToken } from '../utils/index.js';

const authRouter = Router();

// 카카오 로그인
authRouter.get('/kakao', passport.authenticate('kakao'));

authRouter.get(
	'/kakao/callback',

	passport.authenticate('kakao', {
		failureRedirect: '/',
		session: false,
	}),

	(req, res) => {
		try {
			setUserToken(req.user, res);
			res.redirect(`https://wanna-try-this.herokuapp.com/Loading/`);
		} catch (err) {
			next(err);
		}
	},
);

// 구글 로그인
authRouter.get(
	'/google',
	passport.authenticate('google', { scope: ['profile', 'email'] }),
);

authRouter.get(
	'/google/callback',
	passport.authenticate('google', { session: false }),
	async (req, res, next) => {
		try {
			setUserToken(req.user, res);
			res.redirect(`https://wanna-try-this.herokuapp.com/Loading/`);
		} catch (err) {
			next(err);
		}
	},
);

// 네이버 로그인
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
			res.redirect(`https://wanna-try-this.herokuapp.com/Loading/`);
		} catch (err) {
			next(err);
		}
	},
);

export { authRouter };
