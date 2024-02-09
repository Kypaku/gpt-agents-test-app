const request = require('supertest');
const app = require('../app'); // Импортируйте ваше приложение здесь

describe('Тестирование маршрутов приложения', () => {
  test('Корневой маршрут должен возвращать статус 200', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

  test('Маршрут /about должен возвращать статус 200', async () => {
    const response = await request(app).get('/about');
    expect(response.statusCode).toBe(200);
  });

  test('Маршрут /contact должен возвращать статус 200', async () => {
    const response = await request(app).get('/contact');
    expect(response.statusCode).toBe(200);
  });

  test('API маршрут /api/data должен возвращать JSON', async () => {
    const response = await request(app).get('/api/data');
    expect(response.statusCode).toBe(200);
    expect(response.type).toEqual('application/json');
  });
});