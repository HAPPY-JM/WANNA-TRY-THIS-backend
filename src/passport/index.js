import passport from 'passport';

import { kakao } from './kakaoStrategy.js';
import { google } from './googleStrategy.js';
import { naver } from './naverStrategy.js';

export function useKakaoPassport() {
	passport.use(kakao);
}

export function useGooglePassport() {
	passport.use(google);
}

export function useNaverPassport() {
	passport.use(naver);
}
