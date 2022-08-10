import pkg from 'mongoose';
const { Schema } = pkg;

const UserSchema = new Schema(
	{
		nickname: {
			type: String,
			required: true,
		},

		email: {
			type: String,
			required: true,
		},

		foodData: [
			{
				foodId: {
					type: Schema.Types.ObjectId,
					ref: 'food',
				},
			},
		],

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
