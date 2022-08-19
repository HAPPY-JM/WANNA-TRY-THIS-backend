import pkg from 'mongoose';
const { Schema } = pkg;

const FoodSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	img: {
		type: String,
		required: true,
	},
	comment: {
		type: String,
		required: true,
	},
	mood: [
		{
			type: String,
			required: true,
		},
	], // 기분 [good, soso, bad]
	age: [
		{
			type: String,
			required: true,
		},
	], // 나이 [young, middle, old]
	money: {
		type: String,
		required: true,
	}, // 예산 cheap, middle, expensive
	ingredient: {
		type: String,
		required: true,
	}, // 재료 meat, sea, etc
	type: {
		type: String,
		required: true,
	}, // 유형 noodle, rice, etc
	nation: {
		type: String,
		required: true,
	}, // 국가 kor, chi, jap, western, etc
});

export { FoodSchema };
