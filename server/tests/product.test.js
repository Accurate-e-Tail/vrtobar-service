const jest = require('jest');
const request = require('supertest');
const app = require('../app');

describe('products tests', () => {
  test('should get all products', (done) => {
    request(app)
      .get('/products/all/sldkfj')
      .expect(200)
      .expect((res) => {
        expect(res.body.products).toHaveLength(100);
      })
      .end((err) => {
        if (err) {
          return done(err);
        }

        return done();
      });
  });
});
