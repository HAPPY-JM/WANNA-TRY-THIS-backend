import { userModel } from '../db/index.js';
import HashMap from 'hashmap';
//유저라우터에서 사용
class UserService {
	// 본 파일의 맨 아래에서, new UserService(userModel) 하면, 이 함수의 인자로 전달됨
	constructor(userModel) {
		this.userModel = userModel;
	}

	async parseUserInfo(user) {
		const foodCountMap = new HashMap();
		const continentCountMap = new HashMap();

		const foodData = user.foodData;
		const foodDataLength = foodData.length;

		/* 
			유저 정보에 들어있는 foodData 배열을 순회하면서 아래 해시맵 객체에 저장
				1. foodCountMap : 음식 별 추천받은 횟수
				2. continentCountMap: 대륙 별 추천받은 횟수
		*/
		for (let i = 0; i < foodDataLength; ++i) {
			if (foodCountMap.has(foodData[i].foodId.name)) {
				foodCountMap.set(
					foodData[i].foodId.name,
					foodCountMap.get(foodData[i].foodId.name) + 1,
				);
			} else {
				foodCountMap.set(foodData[i].foodId.name, 1);
			}

			if (continentCountMap.has(foodData[i].foodId.nation)) {
				continentCountMap.set(
					foodData[i].foodId.nation,
					continentCountMap.get(foodData[i].foodId.nation) + 1,
				);
			} else {
				continentCountMap.set(foodData[i].foodId.nation, 1);
			}
		}

		// foodCountMap 최대 value 값 찾기
		let maxValue = 0;
		for (let value of foodCountMap.values()) {
			if (value > maxValue) {
				maxValue = value;
			}
		}

		// foodCountMap 최대 value 값에 대응되는 key값을 배열에 저장 (최대 3개)
		const mostRecommandedFood = [];
		for (let { key, value } of foodCountMap) {
			if (mostRecommandedFood.length > 2) {
				break;
			}

			if (value == maxValue) {
				mostRecommandedFood.push(key);
			}
		}

		// response 객체에 데이터 넣기
		const userInfo = {};
		userInfo['mostRecommandedFood'] = mostRecommandedFood;

		for (let { key, value } of continentCountMap) {
			userInfo[key] = value;
		}

		return userInfo;
	}

	async getUser(userId) {
		const userGet = await this.userModel.findById(userId);
		const parsedUserInfo = this.parseUserInfo(userGet);
		const userNick = userGet.nickname;

		return { userNick, parsedUserInfo };
	}

	async getUserByReq(reqInfo) {
		const userInfo = { email: reqInfo.email, provider: reqInfo.provider };
		const user = await this.userModel.findOne(userInfo);

		return user;
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
