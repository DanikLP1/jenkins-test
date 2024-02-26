const request = require('supertest');
const app = require('../index'); // Укажите правильный путь к вашему файлу приложения

describe('GET /', () => {
  it('should return "Hello world" and status 200', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toBe('Hello world');
  });
});

afterAll(async () => {
  await app.close();
});