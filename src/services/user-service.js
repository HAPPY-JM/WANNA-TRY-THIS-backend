import { userModel } from '../db/index.js';

//유저라우터에서 사용
class UserService {
	// 본 파일의 맨 아래에서, new UserService(userModel) 하면, 이 함수의 인자로 전달됨
	constructor(userModel) {
		this.userModel = userModel;
	}

	// async addUser(userInfo){
	//     const newUser =  await this.userModel.create(userInfo);
	//     return newUser;
	// }

	async getUser(userId) {
		const userGet = await this.userModel.findById(userId);
		return userGet;
	}

	async editUserNickname(userId, newNickname) {
		const editUserNick = await this.userModel.updateNick(userId, newNickname);
		return editUserNick;
	}

	async addUserFood(userId, newFoodId) {
		const editUserFood = await this.userModel.updateUserFood(userId, newFoodId);
		return editUserFood;
	}

	async deleteUser(userId) {
		const deleteUser = await this.userModel.deleteUser(userId);
		return deleteUser;
	}
}

const userService = new UserService(userModel);

export { userService };
