import pkg from 'mongoose';
const { Schema } = pkg;

const UserSchema = new Schema(
    {
        nickname: {
            type: String,
            // default: (받아온 정보에 있는 이름)
        },

        email: {
            type: String,
            // ref: (받아온 정보의 이메일)
        },

        foodData: { //음식 확정할때마다 추가
            type: [
                {
                    foodId: {
                        type: Schema.Types.ObjectId,
                        ref: "food",
                    },
                },
            ],
        },
        // { kakao, google, naver }
        provider: {
            type: String,
            required: true
        }
    },
    {
        collection: "users",
        timestamps: true,
    }
);

export {UserSchema};