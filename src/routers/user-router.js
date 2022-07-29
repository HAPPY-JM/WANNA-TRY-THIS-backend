import { Router } from 'express';
import { userService } from '../services/index.js';
import {
	loginRequired,
	changeNicknameValidator,
	addFoodValidator,
} from '../middlewares/index.js';
import { setUserToken } from '../utils/index.js';

const userRouter = Router();

userRouter.get('/', loginRequired, async (req, res, next) => {
	try {
		const { userId } = req.currentUserId;

		if (!userId) {
			throw new Error('userId 값이 없습니다.');
		}
		const user = await userService.getUser(userId);
		res.status(200).json(user);
	} catch (err) {
		next(err);
	}
});

userRouter.patch(
	'/nickname',
	loginRequired,
	changeNicknameValidator,
	async (req, res, next) => {
		const { userId } = req.currentUserId;
		const { newNickname } = req.body;

		try {
			const updateNickname = await userService.editUserNickname(
				userId,
				newNickname,
			);

			setUserToken(updateNickname, res);
			res.status(200).json(updateNickname);
		} catch (err) {
			next(err);
		}
	},
);

userRouter.patch(
	'/food',
	loginRequired,
	addFoodValidator,
	async (req, res, next) => {
		const { userId } = req.currentUserId;
		const { addFoodId } = req.body;

		try {
			const updateUserFood = await userService.addUserFood(userId, addFoodId);
			res.status(200).json(updateUserFood);
		} catch (err) {
			next(err);
		}
	},
);

userRouter.delete('/', loginRequired, async (req, res, next) => {
	try {
		const { userId } = req.currentUserId;
		const deletedUser = await userService.deleteUser(userId);

		res.status(204).json(deletedUser);
	} catch (err) {
		next(err);
	}
});

export { userRouter };
