import 'dotenv/config';
import { Strategy } from 'passport-google-oauth20';
import { userModel } from '../db/index.js';

export const google = new Strategy(
	{
		clientID: process.env.GOOGLE_ID,
		clientSecret: process.env.GOOGLE_SECRET,
		callbackURL: '/api/auth/google/callback',
	},
	async (accessToken, refreshToken, profile, done) => {
		const nickname = profile.displayName;
		const email = profile.emails[0].value;
		const provider = profile.provider;

		try {
			const user = await userModel.findOne({ email, provider });
			if (user) {
				done(null, user);
				return;
			}

			const createdUser = await userModel.create({
				nickname,
				email,
				provider,
			});

			done(null, createdUser);
		} catch (err) {
			done(null, err);
		}
	},
);
