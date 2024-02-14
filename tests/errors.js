const request = require('supertest');
const app = require('../app.js'); // Import your application here

let server;

beforeAll((done) => {
  server = app.listen(3004, done); // Start the server on an alternative port
});

describe('Error handling testing', () => {
  test('Unknown route should return status 404', async () => {
    const response = await request(app).get('/some/nonexistent/route');
    expect(response.statusCode).toBe(404);
    expect(response.body).toEqual({ error: 'Not Found' });
  });
});

afterAll((done) => {
  server.close(done); // Close the server after tests
});