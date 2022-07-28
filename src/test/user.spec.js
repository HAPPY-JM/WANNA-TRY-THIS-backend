import { app } from '../app';
import request from 'supertest';

const TOKEN =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaWNrbmFtZSI6IuuPme2ZlCIsImVtYWlsIjoianNqb2hhbjkyQG5hdmVyLmNvbSIsInByb3ZpZGVyIjoiS0FLQU8iLCJpYXQiOjE2NTgzMTczNzJ9.nHMixZ-l--qn3xbh-468JexrzDIUQV09A_l5nC4HdF8';

//#region GET /api/user/:userId

// test시점에 유효한 user_id를 입력
let VALID_USER_ID = '';

it('[성공] GET /api/user/:userId 성공 시 Status Code는 200 을 반환', async () => {
	const response = await request(app).get(`/api/user/${VALID_USER_ID}`);
	expect(response.statusCode).toBe(200);
});

it('[실패] GET /api/user/:userId 실패 시 Status Code는 400 을 반환', async () => {
	const response = await request(app).get('/api/user/adfafd');
	expect(response.statusCode).toBe(400);
});

//#endregion

//#region PATCH /api/user/nickname

const VALLID_USER_PAYLOAD = {
	userId: '62de7b0acbd9da7f4a0feab5', // TEST 시점에 유요한 userId를 입력
	newNickname: 'success',
};

const INVALLID_USER_PAYLOAD = {
	userId: 'asdf',
	newNickname: 'fail',
};

it('[성공] PATCH /api/user/nickname 성공 시 Status Code는 200 을 반환', async () => {
	const response = await request(app)
		.patch('/api/user/nickname')
		.send(VALLID_USER_PAYLOAD)
		.set('Authorization', `Bearer ${TOKEN}`);

	expect(response.statusCode).toBe(200);
});

it('[실패] PATCH /api/user/nickname 실패 시 Status Code는 400 을 반환', async () => {
	const response = await request(app)
		.patch('/api/user/nickname')
		.send(INVALLID_USER_PAYLOAD)
		.set('Authorization', `Bearer ${TOKEN}`);

	expect(response.statusCode).toBe(400);
});

//#endregion

//#region PATCH /api/user/food

const VALID_ADD_FOOD_PAYLOAD = {
	userId: '', // TEST 시점에 유요한 userId를 입력
	addFoodId: '62d1188216711918747a139e',
};

const INVALID_ADD_FOOD_PAYLOAD = {
	userId: '62de7cf32bc8294a1da82c86',
	addFoodId: 'adfafds',
};

it('[성공] PATCH /api/user/food 성공 시 Status Code는 200 을 반환', async () => {
	const response = await request(app)
		.patch('/api/user/food')
		.send(VALID_ADD_FOOD_PAYLOAD)
		.set('Authorization', `Bearer ${TOKEN}`);

	expect(response.statusCode).toBe(200);
});

it('[실패] PATCH /api/user/food 실패 시 Status Code는 400 을 반환', async () => {
	const response = await request(app)
		.patch('/api/user/food')
		.send(INVALID_ADD_FOOD_PAYLOAD)
		.set('Authorization', `Bearer ${TOKEN}`);

	expect(response.statusCode).toBe(400);
});

//#endregion

//#region DELETE /api/user/:userId

// test시점에 유효한 user_id를 입력
VALID_USER_ID = '';

it('[성공] DELETE /api/user/:userId 성공 시 Status Code는 204 을 반환', async () => {
	const response = await request(app)
		.delete(`/api/user/${VALID_USER_ID}`) // 유효한 userId
		.set('Authorization', `Bearer ${TOKEN}`);

	expect(response.statusCode).toBe(204);
});

it('[실패] DELETE /api/user/:userId 성공 시 Status Code는 400 을 반환', async () => {
	const response = await request(app)
		.delete('/api/user/adfafafdsafdafd') // 유효하지 않은 userId
		.set('Authorization', `Bearer ${TOKEN}`);

	expect(response.statusCode).toBe(400);
});

//#endregion
