const jest = require('jest');
const request = require('supertest');
const app = require('../app');

describe('category tests', () => {
  test('should get all categories', (done) => {
    request(app)
      .get('/categories')
      .expect(200)
      .expect((res) => {
        expect(res.body.categories).toHaveLength(5);
      })
      .end((err) => {
        if (err) {
          return done(err);
        }

        return done();
      });
  });
});
