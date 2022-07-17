import 'dotenv/config';
import passport from 'passport';
import {Strategy as GoogleStrategy} from 'passport-google-oauth20';
import { UserModel } from '../db/index.js';

const google = new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: '/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
        console.log('google prifile: ', profile);
    }
)

const googlePassport = passport.use(google);

export {googlePassport};