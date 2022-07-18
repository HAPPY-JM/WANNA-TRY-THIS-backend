import 'dotenv/config';
import passport from 'passport';
import {Strategy as GoogleStrategy} from 'passport-google-oauth20';
import { userModel } from '../db/index.js';


export const google = 
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            callbackURL: '/api/auth/google/callback',
        },
        async (accessToken, refreshToken, profile, email, done) => {
            const nickname = profile.displayName;

            // console.log(accessToken);
            // console.log(refreshToken);
            // console.log(profile);
            // console.log(nickname, email);

            try{
                const user = await userModel.findOne({ email });

                if (user) {
                    done(null, user);
                }
                    
                const createdUser = await userModel.create({
                    nickname,
                    email,
                    provider: 'google',
                });

                done(null, createdUser);
            }catch(err){
                done(null,err);
            }

        }
    )