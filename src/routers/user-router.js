import { Router } from "express";
import { userService } from '../services/index.js';

const userRouter = Router();

userRouter.post("/", async(req, res) => {
    const userInfo = req.body;
    const newUser = await userService.addUser(userInfo);

    res.status(201).json(newUser);
});

userRouter.get('/', async(req, res, next) => {
    const userId = req.currentUserId;
    
    try{
        const user = await userService.getUser(userId);
        res.status(200).json(user);
    }catch(err){
        next(err);
    }
});

userRouter.patch('/nickname', async(req, res, next) => {
    const {userId, newNickname} = req.body;

    try{
        const updateNickname = await userService.editUserNickname(userId, newNickname);
        res.status(200).json(updateNickname);
    }catch(err){
        next(err);
    }
    
});

userRouter.patch('/addFood', loginRequired, async(req, res, next) => {
    const {userId, addFoodId} = req.body;

    try{
        const updateUserFood = await userService.addUserFood(userId, addFoodId);
        res.status(200).json(updateUserFood);
    }catch(err){
        next(err);
    }
});

export { userRouter };