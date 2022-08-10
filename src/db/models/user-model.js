import pkg from 'mongoose';
const { model } = pkg;
import { UserSchema } from '../schemas/user-schema.js';

const User = model('user', UserSchema);

export class UserModel {
	async create(newUserInfo) {
		const createdNewUser = await User.create(newUserInfo);
		return createdNewUser;
	}

	async findOne(userInfo) {
		const user = await User.findOne(userInfo).populate('foodData.foodId');
		return user;
	}

	async findById(userId) {
		const idUser = await User.findOne({ _id: userId }).populate(
			'foodData.foodId',
		);

		return idUser;
	}

	async updateNick(userId, newNick) {
		const updatedUser = await User.findOneAndUpdate(
			{ _id: userId },
			{ $set: { nickname: newNick } },
			{ returnOriginal: false },
		).populate('foodData.foodId');
		return updatedUser;
	}

	async updateUserFood(userId, newFoodId) {
		const updateUser = await User.findOneAndUpdate(
			{ _id: userId },
			{ $push: { foodData: { foodId: newFoodId } } }, // user스키마 foodData배열에 새로 추천받은 음식 아이디 추가
			{ returnOriginal: false },
		).populate('foodData.foodId');
		return updateUser;
	}

	async deleteUser(userId) {
		const deleteUser = await User.findOneAndDelete({ _id: userId });
		return deleteUser;
	}
}

const userModel = new UserModel();

export { userModel };
