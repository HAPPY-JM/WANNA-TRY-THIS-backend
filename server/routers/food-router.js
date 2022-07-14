import {Router} from "express";
import { foodService } from '../services';

const foodRouter = Router();

foodRouter.post("/", async(req, res) => {
    const foodInfo = req.body;
    const addNewFood = await foodService.addFood(foodInfo);

    res.status(201).json(addNewFood);
});

foodRouter.get("/", async (req, res) => {
    const getFoods = await foodService.findAll();

    res.status(201).json(getFoods);
});

// foodRouter.get("/", async (req, res) => {

// });


export {foodRouter};