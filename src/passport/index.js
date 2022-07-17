import passport from 'passport';

import { kakao } from './kakaoStrategy.js';

export function usePassport() {
  passport.use(kakao);
}

export * from './googleStrategy.js';