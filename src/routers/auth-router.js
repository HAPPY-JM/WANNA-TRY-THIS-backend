import { Router } from "express";
import passport from "passport";

const authRouter = Router();

/**
* /kakao로 요청오면, 카카오 로그인 페이지로 가게 되고, 
* 카카오 서버를 통해 카카오 로그인을 하게 되면, 다음 라우터로 요청한다.
*/

authRouter.get('/kakao', passport.authenticate('kakao'));

//? 위에서 카카오 서버 로그인이 되면, 카카오 redirect url 설정에 따라 이쪽 라우터로 오게 된다.
authRouter.get(
   '/kakao/callback',
   //그리고 passport 로그인 전략에 의해 kakaoStrategy로 가서 카카오계정 정보와 DB를 비교해서 회원가입시키거나 로그인 처리하게 한다.
   passport.authenticate('kakao', {
      failureRedirect: '/', // kakaoStrategy에서 실패한다면 실행
   }),
   // kakaoStrategy에서 성공한다면 콜백 실행
   (req, res) => {
      res.redirect('/');
   },
);



//구글 로그인

// 구글로 로그인하기 라우터*************
authRouter.get('/google', passport.authenticate('google', {scope: ['profile', 'email']})); // 프로필과 이메일 정보를 받는다

//위에서 구글 서버 로그인이 되면, redirect url 설정에 따라 이쪽 라우터로 오게 된다. 인증코드 받음
authRouter.get(
   'google/callback', 
   passport.authenticate('google'), //그리고 passport 로그인 전략에 의해 googleStrategy로 가서 구글계정 정보와 DB를 비교해서 회원가입시키거나 로그인 처리하게 한다
   (req, res) => {
      res.redirect('/');
   }
);





export { authRouter };