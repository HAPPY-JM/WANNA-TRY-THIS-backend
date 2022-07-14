import { Schema } from 'mongoose';

const FoodSchema = new Schema(
    {
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
        mood: [{
            type: String,
        }], // 기분 [good, soso, bad]
        age: [{
            type: String,
        }], // 나이 [young, middle, old]
        money: {
            type: String,
        }, // 예산 cheap, middle, expensive
        ingredient: [{
            type: String,
        }], // 재료 [meat, seafood, etc]
        nation: {
            type: String,
        } // 국가 kor, chi, jap, western, etc
    }
);

export {FoodSchema};