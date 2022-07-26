import { Router } from 'express';
import { foodService } from '../services/index.js';

const foodRouter = Router();

//음식추가
foodRouter.post('/', async (req, res) => {
	const foodInfo = req.body;
	const addNewFood = await foodService.addFood(foodInfo);

	res.status(201).json(addNewFood);
});

//모든음식get
foodRouter.get('/', async (req, res) => {
	const getFoods = await foodService.findAll();

	res.status(200).json(getFoods);
});

// //필터링음식get ********* 추후 수정 ***********
// foodRouter.get('/result', async (req, res) => {
// 	const { mood, age, money, ingredient } = req.query;
// 	const answersToFilter = {
// 		$or: [
// 			// or? and?
// 			{ mood: mood },
// 			{ age: age },
// 			{ money: { $in: money } },
// 			{ ingredient: { $in: ingredient } }, // in을 쓰는게 맞는지 시험해볼것!!
// 		],
// 	};

// 	const filteredFoods = await foodService.foodFilter(answersToFilter);

// 	res.status(200).json(filteredFoods);
// });

export { foodRouter };
