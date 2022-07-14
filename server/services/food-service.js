import { foodModel } from '../db';

class FoodService {
    // 본 파일의 맨 아래에서, new FoodService(foodModel) 하면, 이 함수의 인자로 전달됨
    constructor(foodModel) {
        this.foodModel = foodModel;
    }

    async addFood(foodInfo){
        const newFood = await this.foodModel.create(foodInfo);
        return newFood;
    }

    async findAll(){
        const allFoods = await this.foodModel.findAll();
        return allFoods;
    }

    async foodFilter(answers){
        const findFoods = await this.foodModel.foodFilter(answers);
        return findFoods;
    }
}

const foodService = new FoodService(foodModel);

export {foodService};