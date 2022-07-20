import pkg from 'mongoose';
const { model } = pkg;
import { UserSchema } from '../schemas/user-schema.js';

const User = model("user", UserSchema);

export class UserModel{
    
    async create(userInfo) {
        const createdNewUser = await User.create(userInfo);
        return createdNewUser;
    }

    async findOne(userInfo) {
        const user = await User.findOne(userInfo);
        return user;
    }
    
    async deleteUser(userInfo) {
        const user = await User.deleteOne(userInfo);
        return user;
    }

}

const userModel = new UserModel();

export { userModel };