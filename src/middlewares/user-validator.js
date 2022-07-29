import { body, validationResult } from 'express-validator';

const validationFunc = (req, res, next) => {
	const error = validationResult(req);

	if (!error.isEmpty()) {
		return res.status(400).json(error);
	}

	next();
};

export const changeNicknameValidator = [
	body('newNickname', 'newNickname을 입력해주세요.').trim().notEmpty(),

	validationFunc,
];

export const addFoodValidator = [
	body('addFoodId', 'addFoodId를 입력해주세요.').trim().notEmpty(),

	validationFunc,
];
