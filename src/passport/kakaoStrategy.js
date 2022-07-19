import 'dotenv/config';
import { userModel } from '../db/index.js';
import { Strategy as KakaoStrategy } from 'passport-kakao';


const config = {
   clientID: process.env.KAKAO_ID, // 카카오 로그인에서 발급받은 REST API 키
   callbackURL: '/api/auth/kakao/callback', // 카카오 로그인 Redirect URI 경로
}

//#region func:findOrCreateUser
const provider = "KAKAO";

async function findOrCreateUser(email, nickname) {
   const user = await userModel.findOne({ email });
 
   if (user) {

     return user;
   }
 
   // TODO: 데이터가 올바르게 들어가도록 수정
   const createdUser = await userModel.create({
     nickname,
     email,
     provider
   });
 
   return createdUser;
 }
//#endregion

 export const kakao = new KakaoStrategy(
   config,

   async (accessToken, refreshToken, profile, done) => {
    //  console.log('kakao profile', profile);
    //  console.log('accessToken', accessToken);
    //  console.log('refreshToken', refreshToken);

     const nickname = profile._json.properties.nickname;
     const email = profile._json.kakao_account.email;

     // TODO: done함수 인자값 수정 필요한지 생각하기
     try {
       const user = await findOrCreateUser(nickname, email);
       done(null, user);
     } catch (error) {
       console.error(error);
       done(error);
     }
   }
 );