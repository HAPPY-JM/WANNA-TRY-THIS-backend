import passport from 'passport';

import { kakao } from './kakaoStrategy.js';
import { google } from './googleStrategy.js';

export function useKakaoPassport() {
  passport.use(kakao);
}

export function useGooglePassport(){
  passport.use(google);
}