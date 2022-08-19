import { Router } from 'express';
import { foodService } from '../services/index.js';

const foodRouter = Router();

//음식추가
foodRouter.post('/', async (req, res, next) => {
	const foodInfo = req.body;

	try {
		const addNewFood = await foodService.addFood(foodInfo);

		res.status(201).json(addNewFood);
	} catch (err) {
		next(err);
	}
});

// 무한스크롤
foodRouter.get('/perPage', async (req, res, next) => {
	const currentPageNum = Number(req.query.page);
	const perPageNum = 15;

	try {
		const allProducts = await foodService.findAll();
		const allProductsLength = allProducts.length;
		const maxPageNum = Math.ceil(allProductsLength / perPageNum);

		//early-return
		if (currentPageNum < 1 || currentPageNum > maxPageNum) {
			throw new Error('올바르지 않은 page 번호입니다.');
		}

		const productsPerPage = await foodService.pagination(
			allProducts,
			currentPageNum,
			perPageNum,
		);

		res.status(200).send({
			productsPerPage,
			maxPageNum,
		});
	} catch (err) {
		next(err);
	}
});

//필터링음식get
foodRouter.get('/result', async (req, res, next) => {
	const { mood, age, money, ingredient, nation, type } = req.query;

	let answersToFilter;
	if (money === 'any') {
		answersToFilter = {
			$and: [
				{ mood: mood },
				{ age: age },
				{ ingredient: ingredient },
				{ nation: nation },
				{ type: type },
			],
		};
	} else if (nation === 'any') {
		answersToFilter = {
			$and: [
				{ mood: mood },
				{ age: age },
				{ money: money },
				{ ingredient: ingredient },
				{ type: type },
			],
		};
	} else if (money === 'any' && nation === 'any') {
		answersToFilter = {
			$and: [
				{ mood: mood },
				{ age: age },
				{ ingredient: ingredient },
				{ type: type },
			],
		};
	} else {
		answersToFilter = {
			$and: [
				{ mood: mood },
				{ age: age },
				{ money: money },
				{ ingredient: ingredient },
				{ nation: nation },
				{ type: type },
			],
		};
	}

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

//국가별 음식 get
foodRouter.get('/:nation', async (req, res, next) => {
	const { nation } = req.params;

	try {
		if (
			!(
				nation == 'kor' ||
				nation == 'chi' ||
				nation == 'jap' ||
				nation == 'west' ||
				nation == 'etc'
			)
		) {
			throw new Error(`${nation}은(는) 올바르지 않은 nation 이름입니다.`);
		}
		const foods = await foodService.findByNation(nation);
		res.status(200).json(foods);
	} catch (err) {
		next(err);
	}
});

export { foodRouter };
