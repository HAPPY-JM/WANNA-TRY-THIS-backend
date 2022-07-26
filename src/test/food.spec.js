import { app } from '../app';
import request from 'supertest';

// 음식 추가
it('[성공] POST /api/food 성공 시 Status Code는 201을 반환한다.', async () => {
	const response = await request(app)
		.post('/api/food')
		.send({
			name: 'dd',
			img: 'dd',
			comment: 'dd',
			mood: ['dd'],
			age: ['dd'],
			money: 'dd',
			ingredient: ['dd'],
			nation: 'dd',
		});
	expect(response.statusCode).toBe(201);
});

it('[실패] POST /api/food 실패 시 Status Code는 400을 반환한다.', async () => {
	const response = await request(app)
		.post('/api/food')
		.send({
			name: 'dd',
			img: 'dd',
			comment: 'dd',
			mood: ['dd'],
			age: ['dd'],
			money: 'dd',
			ingredient: ['dd'],
			nation: '',
		});
	expect(response.statusCode).toBe(400);
});

// 모든 음식 get
it('[성공] GET /api/food 성공 시 Status Code는 200을 반환한다.', async () => {
	const response = await request(app).get('/api/food');
	expect(response.statusCode).toBe(200);
});

// it('[실패] GET /api/food 실패 시 Status Code는 400을 반환한다.', async () => {
// 	const response = await request(app).get('/api/food');
// 	expect(response.statusCode).toBe(400);
// });
