import { Router } from "express";
import { userService } from '../services/index.js';

const userRouter = Router();

userRouter.post("/", async(req, res) => {
    const userInfo = req.body;
    const addNewUser = await userService.addUser(userInfo);

    res.status(201).json(addNewUser);
});


export { userRouter };