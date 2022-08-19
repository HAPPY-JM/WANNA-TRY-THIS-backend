import { app } from '../app';
import request from 'supertest';

//#region GET /api/user

it('[성공] GET /api/user 성공 시 Status Code는 200 을 반환', async () => {
	let validToken =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaWNrbmFtZSI6IuuPme2ZlCIsImVtYWlsIjoianNqb2hhbjkyQG5hdmVyLmNvbSIsInByb3ZpZGVyIjoiS0FLQU8iLCJpYXQiOjE2NTkxNDg2NzF9.zaaDvjJU3PZc8IyC9vFOZCFHY64mHsVfYFE8O9CEaBo';

	const response = await request(app).get(`/api/user`)
		.set('Authorization', `Bearer ${validToken}`);

	expect(response.statusCode).toBe(200);
});

it('[실패] GET /api/user 실패 시 Status Code는 403 을 반환', async () => {
	let invalidToKen = 'invalidToken';
	const response = await request(app).get('/api/user')
		.set('Authorization', `Bearer ${invalidToKen}`);

	expect(response.statusCode).toBe(403);
});

//#endregion

//#region PATCH /api/user/nickname

const VALLID_USER_PAYLOAD = {
	newNickname: 'success',
};

const INVALLID_USER_PAYLOAD = {
	newNickname: '',
};

it('[성공] PATCH /api/user/nickname 성공 시 Status Code는 200 을 반환', async () => {
	let validToken =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaWNrbmFtZSI6IuuPme2ZlCIsImVtYWlsIjoianNqb2hhbjkyQG5hdmVyLmNvbSIsInByb3ZpZGVyIjoiS0FLQU8iLCJpYXQiOjE2NTkxNDg2NzF9.zaaDvjJU3PZc8IyC9vFOZCFHY64mHsVfYFE8O9CEaBo';

	const response = await request(app)
		.patch('/api/user/nickname')
		.send(VALLID_USER_PAYLOAD)
		.set('Authorization', `Bearer ${validToken}`);

	expect(response.statusCode).toBe(200);
});

it('[실패] PATCH /api/user/nickname 실패 시 Status Code는 400 을 반환', async () => {
	let validToken =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaWNrbmFtZSI6IuuPme2ZlCIsImVtYWlsIjoianNqb2hhbjkyQG5hdmVyLmNvbSIsInByb3ZpZGVyIjoiS0FLQU8iLCJpYXQiOjE2NTkxNDg2NzF9.zaaDvjJU3PZc8IyC9vFOZCFHY64mHsVfYFE8O9CEaBo';

	const response = await request(app)
		.patch('/api/user/nickname')
		.send(INVALLID_USER_PAYLOAD)
		.set('Authorization', `Bearer ${validToken}`);

	expect(response.statusCode).toBe(400);
});

//#endregion

//#region PATCH /api/user/food

const VALID_ADD_FOOD_PAYLOAD = {
	addFoodId: '62e25d41c2792a4bd70fbfca',
};

const INVALID_ADD_FOOD_PAYLOAD = {
	addFoodId: 'adfafds',
};

it('[성공] PATCH /api/user/food 성공 시 Status Code는 200 을 반환', async () => {
	let validToken =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaWNrbmFtZSI6IuuPme2ZlCIsImVtYWlsIjoianNqb2hhbjkyQG5hdmVyLmNvbSIsInByb3ZpZGVyIjoiS0FLQU8iLCJpYXQiOjE2NTkxNDg2NzF9.zaaDvjJU3PZc8IyC9vFOZCFHY64mHsVfYFE8O9CEaBo';

	const response = await request(app)
		.patch('/api/user/food')
		.send(VALID_ADD_FOOD_PAYLOAD)
		.set('Authorization', `Bearer ${validToken}`);

	expect(response.statusCode).toBe(200);
});

it('[실패] PATCH /api/user/food 실패 시 Status Code는 403 을 반환', async () => {
	let invalidToken =
		'invalidToken';

	const response = await request(app)
		.patch('/api/user/food')
		.send(INVALID_ADD_FOOD_PAYLOAD)
		.set('Authorization', `Bearer ${invalidToken}`);

	expect(response.statusCode).toBe(403);
});

//#endregion

//#region DELETE /api/user/:userId

it('[성공] DELETE /api/user 성공 시 Status Code는 204 을 반환', async () => {
	let validToken =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaWNrbmFtZSI6IuuPme2ZlCIsImVtYWlsIjoianNqb2hhbjkyQG5hdmVyLmNvbSIsInByb3ZpZGVyIjoiS0FLQU8iLCJpYXQiOjE2NTkxNDg2NzF9.zaaDvjJU3PZc8IyC9vFOZCFHY64mHsVfYFE8O9CEaBo';

	const response = await request(app)
		.delete('/api/user') // 유효한 userId
		.set('Authorization', `Bearer ${validToken}`);

	expect(response.statusCode).toBe(204);
});

it('[실패] DELETE /api/user 성공 시 Status Code는 403 을 반환', async () => {
	let invalidToken = 'invalidToken';
	const response = await request(app)
		.delete('/api/user')
		.set('Authorization', `Bearer ${invalidToken}`);

	expect(response.statusCode).toBe(403);
});

//#endregion
