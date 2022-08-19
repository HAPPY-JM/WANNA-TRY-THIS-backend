import cors from 'cors';
import express from 'express';
import passport from 'passport';
import {
	useKakaoPassport,
	useGooglePassport,
	useNaverPassport,
} from './passport/index.js';
import { errorHandler } from './middlewares/index.js';
import { foodRouter, userRouter, authRouter } from './routers/index.js';

import session from 'express-session';

useKakaoPassport();
useGooglePassport();
useNaverPassport();

const app = express();

// CORS 에러 방지
app.use(cors());

app.use(session({ secret: 'somevalue' }));

// Content-Type: application/json 형태의 데이터를 인식하고 핸들링할 수 있게 함.
app.use(express.json());

// Content-Type: application/x-www-form-urlencoded 형태의 데이터를 인식하고 핸들링할 수 있게 함.
app.use(express.urlencoded({ extended: false }));

app.use(
	session({
		secret: 'SECRET',
		resave: false,
		saveUninitialized: false,
		proxy: true,
	}),
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/food', foodRouter);
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

// 순서 중요 (errorHandler은 다른 일반 라우팅보다 나중에 있어야 함)
// 그래야, 에러가 났을 때 next(error) 했을 때 여기로 오게 됨
app.use(errorHandler);

export { app };
