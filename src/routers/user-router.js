import { Router } from "express";
import { userService } from '../services/index.js';

const userRouter = Router();

userRouter.post("/", async(req, res) => {
    const userInfo = req.body;
    const newUser = await userService.addUser(userInfo);

    res.status(201).json(newUser);
});

// TODO #1: router 동작확인
// TODO #2: express-validator로 입력값 검증
userRouter.get("/logout", async(req, res) => {
// userRouter.get("/logout", loginrequired, async(req, res) => {
    try {
        req.logout();
        req.session.save(() => {
            res.status(200).redirect('/');
        })
    } catch (error) {
        next(error);
    }
})

userRouter.delete("/:userId", async(req, res) => {
// userRouter.delete("/", loginrequired, async(req, res) => {
    try {
        const deletedUser = await userService.deleteUser(req.params);
        res.status(200).json(deletedUser);
    } catch (error){
        next(error);
    }
})


export { userRouter };