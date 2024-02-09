const request = require('supertest');
const app = require('../app.js'); // Импортируйте ваше приложение здесь

describe('Тестирование обработки ошибок', () => {
  test('Неизвестный маршрут должен возвращать статус 404', async () => {
    const response = await request(app).get('/some/nonexistent/route');
    expect(response.statusCode).toBe(404);
    expect(response.body).toEqual({ error: 'Not Found' });
  });
});