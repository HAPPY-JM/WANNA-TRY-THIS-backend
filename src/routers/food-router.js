import { Router } from 'express';
import { foodService } from '../services/index.js';

const foodRouter = Router();

//음식추가;
foodRouter.post('/', async (req, res, next) => {
	const foodInfo = req.body;

	try {
		const addNewFood = await foodService.addFood(foodInfo);

		res.status(201).json(addNewFood);
	} catch (err) {
		next(err);
	}
});

//모든음식get
foodRouter.get('/', async (req, res, next) => {
	try {
		const getFoods = await foodService.findAll();

		if (getFoods.length == 0) {
			throw new Error('저장되어 있는 음식 데이터가 없습니다.');
		}
		res.status(200).json(getFoods);
	} catch (err) {
		next(err);
	}
});

//필터링음식get
foodRouter.get('/result', async (req, res, next) => {
	console.log(req.query);
	const { mood, age, money, ingredient } = req.query;

	let answersToFilter;
	if (money === 'any') {
		answersToFilter = {
			$and: [{ mood: mood }, { age: age }, { ingredient: ingredient }],
		};
	} else {
		answersToFilter = {
			$and: [
				{ mood: mood },
				{ age: age },
				{ money: money },
				{ ingredient: ingredient },
			],
		};
	}
	console.log(answersToFilter);

	try {
		const filteredFoods = await foodService.foodFilter(answersToFilter);

		if (filteredFoods.length == 0) {
			throw new Error('일치하는 음식이 없습니다...');
		}

		res.status(200).json(filteredFoods);
	} catch (err) {
		next(err);
	}
});

export { foodRouter };
