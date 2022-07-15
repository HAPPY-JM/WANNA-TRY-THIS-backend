import 'dotenv/config';
import { userModel } from '../db/index.js';
import { Strategy as KakaoStrategy } from 'passport-kakao';


const config = {
   clientID: process.env.KAKAO_ID, // 카카오 로그인에서 발급받은 REST API 키
   callbackURL: '/api/auth/kakao/callback', // 카카오 로그인 Redirect URI 경로
}

const provider = "KAKAO";

async function findOrCreateUser(email, nickname) {
   const user = await userModel.findOne({ email });
 
   if (user) {

     return user;
   }
 
   const createdUser = await userModel.create({
     nickname,
     email,
     provider
   });
 
   return createdUser;
 }

 export const kakao = new KakaoStrategy(
   config,
   async (accessToken, refreshToken, profile, done) => {
     const nickname = profile._json.properties.nickname;
     const email = profile._json.kakao_account.email;

     try {
       const user = await findOrCreateUser(nickname, email);
       done(null, user);
     } catch (error) {
       console.error(error);
       done(error);
     }
   }
 );