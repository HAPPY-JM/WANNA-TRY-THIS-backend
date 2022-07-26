import { app } from './app';
import { request } from 'supertest';

// 음식 추가
it('POST /api/food 성공 시 Status Code는 201을 반환한다.', async () => {
	const response = await request(app).post('/api/food');
	expect(response.statusCode).toBe(201);
});

// 모든 음식 get
it('GET /api/food 성공 시 Status Code는 200을 반환한다.', async () => {
	const response = await request(app).get('api/food');
	expect(response.statusCode).toBe(200);
});

// // 음식 필터링
// it('GET /api/food?mood=${mood}&age=${age}&money=${money}&ingredient=${ingredient} 받은 쿼리에 부합하는 음식 존재 시 200을 반환한다.', async () => {
// 	const response = await request(app)
// 		.get('/api/food/result')
// 		.query({ mood: '', age: '', money: '', ingredient: '' });
// 	expect(response.statusCode).toBe(200);
// });
