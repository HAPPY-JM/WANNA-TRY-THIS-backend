import { Router } from "express";
import { userService } from '../services/index.js';
import { loginRequired } from '../middlewares/login-required.js';

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

userRouter.patch('/nickname', loginRequired, async(req, res, next) => {
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

// TODO #1: router 동작확인
userRouter.get("/logout", loginRequired, async(req, res) => {

    try {
        req.logout();
        req.session.save(() => {
            console.log(req.user);
            res.status(200).redirect('/');
        })

        // req.session.destroy();
        // res.status(200)/redirect('/');
    } catch (error) {
        next(error);
    }

})

userRouter.delete("/:userId", loginRequired, async(req, res) => {
    try {
        if (!req.params) {
            throw new Error('userId를 파라미터로 넘겨주세요')
        }
        
        const deletedUser = await userService.deleteUser(req.params);
        res.status(200).json(deletedUser);
    } catch (error){
        next(error);
    }
})

export { userRouter };