import pkg from 'mongoose';
const { model } = pkg;
import { UserSchema } from '../schemas/user-schema.js';

const User = model("user", UserSchema);

export class UserModel{
    // async create(userInfo){
    //     //유저데이터 추가
    //     const createNewUser = await User.create(userInfo);
    //     return createNewUser;
    // }
    
    async create(userInfo) {
        const createdNewUser = await User.create(userInfo);
        return createdNewUser;
    }

    async findOne(email) {
        const user = await User.findOne(email);
        return user;
    }
    

}

const userModel = new UserModel();

export { userModel };