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
		console.log(profile);

		const nickname = profile.displayName;
		const email = profile.emails[0].value;
		const provider = profile.provider;

		try {
			const user = await userModel.findOne({ email });

			if (user) {
				done(null, user);
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
