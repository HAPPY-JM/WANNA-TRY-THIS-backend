import pkg from 'mongoose';
const { model } = pkg;
import { FoodSchema } from '../schemas/food-schema.js';

const Food = model("food", FoodSchema);

export class FoodModel{
    async create(foodInfo){
        const createNewFood = await Food.create(foodInfo);
        return createNewFood;
    }

    async findAll(){
        //모든 음식데이터 가져오기(id, name, img, comment, nation만)
        const allFoods = await Food.find({}, {projection: {mood:0, age:0, money:0, ingredient:0}});
        return allFoods;
    }

    async foodFilter(answers){
        // 답변들로 음식찾기
        const filteredFoods = await Food.find({answers}, {projection: {mood:0, age:0, money:0, ingredient:0}});
        return filteredFoods;
    }
}

const foodModel = new FoodModel();

export {foodModel};