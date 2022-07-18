import 'dotenv/config';
import passport from 'passport';
import {Strategy as GoogleStrategy} from 'passport-google-oauth20';
import { userModel } from '../db/index.js';

const findOrCreateUser = async(profile) => {
    const user = await userModel.findOne({ email });

    if (user) {
        return user;
    }
    
    const createdUser = await userModel.create({
        nickname: profile.displayName,
        email: profile.email,
        provider: 'google',
    });

    return createdUser;
}


const google = new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: '/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, next) => {
        console.log('google prifile: ', profile);

        try{
            findOrCreateUser(profile);
        }catch(err){
            next(err);
        }

    }
)

const googlePassport = passport.use(google);

export {googlePassport};