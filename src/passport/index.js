import passport from 'passport';

import { kakao } from './kakaoStrategy.js';

export function usePassport() {
  passport.serializeUser((user, done) => {
    console.log("user", user);
    done(null, user);
  });

  passport.deserializeUser((obj, done) => {
    console.log("obj", obj);
    done(null, obj);
  });

  passport.use(kakao);  
}
