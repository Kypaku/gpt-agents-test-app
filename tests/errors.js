const request = require('supertest');
const app = require('../app.js'); // Импортируйте ваше приложение здесь

beforeAll((done) => {
  server = app.listen(3004, done); // Запускаем сервер на альтернативном порту
});

describe('Тестирование обработки ошибок', () => {
  test('Неизвестный маршрут должен возвращать статус 404', async () => {
    const response = await request(app).get('/some/nonexistent/route');
    expect(response.statusCode).toBe(404);
    expect(response.body).toEqual({ error: 'Not Found' });
  });
});

afterAll((done) => {
  server.close(done); // Закрываем сервер после тестов
});
