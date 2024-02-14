const request = require('supertest');
const app = require('../app'); // Import your application here

let server;

beforeAll((done) => {
  server = app.listen(3003, done); // Start the server on an alternative port
});

describe('Testing application routes', () => {
  test('Root route should return status 200', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

  test('Route /about should return status 200', async () => {
    const response = await request(app).get('/about');
    expect(response.statusCode).toBe(200);
  });

  test('Route /contact should return status 200', async () => {
    const response = await request(app).get('/contact');
    expect(response.statusCode).toBe(200);
  });

  test('API route /api/data should return JSON', async () => {
    const response = await request(app).get('/api/data');
    expect(response.statusCode).toBe(200);
    expect(response.type).toEqual('application/json');
  });
});

afterAll((done) => {
  server.close(done); // Close the server after tests
});