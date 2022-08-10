import { foodModel } from '../db/index.js';

class FoodService {
	// 본 파일의 맨 아래에서, new FoodService(foodModel) 하면, 이 함수의 인자로 전달됨
	constructor(foodModel) {
		this.foodModel = foodModel;
	}

	async addFood(foodInfo) {
		const newFood = await this.foodModel.createNewFood(foodInfo);
		return newFood;
	}

	async findAll() {
		const allFoods = await this.foodModel.findAll();
		return allFoods;
	}

	async findByNation(nation) {
		const foods = await this.foodModel.findByNation(nation);
		return foods;
	}

	async foodFilter(answers) {
		const findFoods = await this.foodModel.foodFilter(answers);
		return findFoods;
	}

	async pagination(allProduct, currentPageNum, perPageNum) {
		const currentProducts = await allProduct.slice(
			perPageNum * (currentPageNum - 1),
			perPageNum * (currentPageNum - 1) + perPageNum,
		);

		return currentProducts;
	}
}

const foodService = new FoodService(foodModel);

export { foodService };
