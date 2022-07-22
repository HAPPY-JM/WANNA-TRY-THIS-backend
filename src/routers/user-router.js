import { Router } from 'express';
import { userService } from '../services/index.js';
import { loginRequired } from '../middlewares/login-required.js';
import { changeNicknameValidator, addFoodValidator } from '../middlewares/user-validator.js';

const userRouter = Router();

userRouter.get('/:userId', async (req, res, next) => {
	try {
		const { userId } = req.params;

		if (!userId) {
			throw new Error('userId 값이 없습니다.');
		}

		const user = await userService.getUser(userId);
		res.status(200).json(user);
	} catch (err) {
		next(err);
	}
});

// TODO: 닉네임을 새로 설정하면 토큰을 다시 생성해서 프론트에 보내줘야 함
userRouter.patch('/nickname', loginRequired, changeNicknameValidator,
	async (req, res, next) => {
		const { userId, newNickname } = req.body;

		try {
			const updateNickname = await userService.editUserNickname(
				userId,
				newNickname,
			);
			res.status(200).json(updateNickname);
		} catch (err) {
			next(err);
		}
	},
);

userRouter.patch('/addFood', loginRequired, addFoodValidator,
	async (req, res, next) => {
		const { userId, addFoodId } = req.body;

		try {
			const updateUserFood = await userService.addUserFood(userId, addFoodId);
			res.status(200).json(updateUserFood);
		} catch (err) {
			next(err);
		}
	},
);

userRouter.delete('/:userId', loginRequired, async (req, res) => {
	try {
		if (!req.params) {
			throw new Error('userId');

		}

		const deletedUser = await userService.deleteUser(req.params);
		res.status(204).json(deletedUser);
	} catch (error) {
		next(error);
	}
});

export { userRouter };
