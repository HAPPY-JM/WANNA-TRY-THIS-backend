import pkg from 'mongoose';
const { Schema } = pkg;

const UserSchema = new Schema(
	{
		nickname: {
			type: String,
		},

		email: {
			type: String,
		},

		foodData: [
			//음식 확정할때마다 추가
			{
				foodId: {
					type: Schema.Types.ObjectId,
					ref: 'food',
				},
			},
		],

		// { kakao, google, naver }
		provider: {
			type: String,
			required: true,
		},
	},
	{
		collection: 'users',
		timestamps: true,
	},
);

export { UserSchema };
