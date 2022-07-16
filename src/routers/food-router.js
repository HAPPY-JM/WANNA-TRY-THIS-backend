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

// foodRouter.get("/", async (req, res) => {

// });


export {foodRouter};