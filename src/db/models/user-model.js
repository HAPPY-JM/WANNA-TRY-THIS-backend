import pkg from 'mongoose';
const { model } = pkg;
import { UserSchema } from '../schemas/user-schema.js';

const User = model("user", UserSchema);

export class UserModel{
    
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