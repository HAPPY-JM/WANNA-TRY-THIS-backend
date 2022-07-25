import { app } from "./app";
import request from "supertest"

const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaWNrbmFtZSI6IuuPme2ZlCIsImVtYWlsIjoianNqb2hhbjkyQG5hdmVyLmNvbSIsInByb3ZpZGVyIjoiS0FLQU8iLCJpYXQiOjE2NTgzMTczNzJ9.nHMixZ-l--qn3xbh-468JexrzDIUQV09A_l5nC4HdF8';


//#region GET /api/user/:userId

// it('[성공] GET /api/user/:userId 성공 시 Status Code는 200 을 반환', async () => {
//   const response = await request(app).get('/api/user/62de467b46e9991239bcdd2a')
//   expect(response.statusCode).toBe(200);
// });

// it('[실패] GET /api/user/:userId 실패 시 Status Code는 400 을 반환', async () => {
//   const response = await request(app).get('/api/user/asdf');
//   expect(response.statusCode).toBe(400);
// });

//#endregion


//#region PATCH /api/user/nickname

// const VALLID_USER_PAYLOAD = {
//   "userId": "62de467b46e9991239bcdd2a",
//   "newNickname": "success"
// }

// const INVALLID_USER_PAYLOAD = {
//   "userId": "asdf",
//   "newNickname": "fail"
// }

// it('[성공] PATCH /api/user/nickname 성공 시 Status Code는 200 을 반환', async () => {
//   const response = await request(app)
//     .patch('/api/user/nickname')
//     .send(VALLID_USER_PAYLOAD)
//     .set('Authorization', `Bearer ${TOKEN}`)

//   expect(response.statusCode).toBe(200);
// });

// it('[실패] PATCH /api/user/nickname 실패 시 Status Code는 400 을 반환', async () => {
//   const response = await request(app)
//     .patch('/api/user/nickname')
//     .send(INVALLID_USER_PAYLOAD)
//     .set('Authorization', `Bearer ${TOKEN}`)

//   expect(response.statusCode).toBe(400);
// });

//#endregion


//#region PATCH /api/user/food

// const VALID_ADD_FOOD_PAYLOAD = {
//   "userId": "62d7e95f4d99e035f332b5ae",
//   "addFoodId": "62d1188216711918747a139e"
// };

// const INVALID_ADD_FOOD_PAYLOAD = {
//   "userId": "62d7e95f4d99e035f332b5ae",
//   "addFoodId": "adfafds"
// };

// it('[성공] PATCH /api/user/food 성공 시 Status Code는 200 을 반환', async () => {
//   const response = await request(app)
//     .patch('/api/user/food')
//     .send(VALID_ADD_FOOD_PAYLOAD)
//     .set('Authorization', `Bearer ${TOKEN}`)

//   expect(response.statusCode).toBe(200);
// });

// it('[실패] PATCH /api/user/food 실패 시 Status Code는 400 을 반환', async () => {
//   const response = await request(app)
//     .patch('/api/user/food')
//     .send(INVALID_ADD_FOOD_PAYLOAD)
//     .set('Authorization', `Bearer ${TOKEN}`)

//   expect(response.statusCode).toBe(400);
// });

//#endregion


//#region DELETE /api/user/:userId

// it('[성공] DELETE /api/user/:userId 성공 시 Status Code는 204 을 반환', async () => {
//   const response = await request(app)
//     .delete('/api/user/62de469746e9991239bcdd2e') // 유효한 userId
//     .set('Authorization', `Bearer ${TOKEN}`)

//   expect(response.statusCode).toBe(204);
// });

// it('[실패] DELETE /api/user/:userId 성공 시 Status Code는 400 을 반환', async () => {
//   const response = await request(app)
//     .delete('/api/user/adfafafdsafdafd') // 유효하지 않은 userId
//     .set('Authorization', `Bearer ${TOKEN}`)

//   expect(response.statusCode).toBe(400);
// });

//#endregion