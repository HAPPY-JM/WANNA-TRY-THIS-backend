import { Router } from "express";
import passport from "passport";

const authRouter = Router();

authRouter.get('/kakao', passport.authenticate('kakao'));
 
authRouter.get(
   '/kakao/callback',
   passport.authenticate('kakao', {
      failureRedirect: '/', // kakaoStrategy에서 실패한다면 실행
      // successRedirect: '/' ,
   }),
   // kakaoStrategy에서 성공한다면 콜백 실행
   (req, res) => {
      res.redirect('/success');
   },
);

export { authRouter };