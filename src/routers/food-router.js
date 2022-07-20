import {Router} from "express";
import { foodService } from '../services/index.js';

const foodRouter = Router();

foodRouter.post("/", async(req, res) => {
    const foodInfo = req.body;
    const addNewFood = await foodService.addFood(foodInfo);

    res.status(201).json(addNewFood);
});

foodRouter.get("/", async (req, res) => {
    const getFoods = await foodService.findAll();

    res.status(200).json(getFoods);
});

foodRouter.get("/result", async(req, res) => {
    const {mood, age, money, ingredient} = req.body;
    const answersToFilter = {
        $or: [ // or? and?
            { mood: { $in: mood } }, // in을 쓰는게 맞는지 시험해볼것!!
            { age: { $in: age } },
            { money: { $in: money } },
            { ingredient: { $in: ingredient } }
        ]
    }

    const filteredFoods = await foodService.foodFilter(answersToFilter);

    res.status(200).json(filteredFoods);
})



export {foodRouter};