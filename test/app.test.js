const chai = require('chai');
const request = require('supertest');
const app = require('../app');

const expect = chai.expect;

describe('Application Tests', () => {
  it('should return hello message', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).to.equal('Hello Jenkins!');
        done();
      });
  });

  it('should return health status', (done) => {
    request(app)
      .get('/health')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.status).to.equal('OK');
        done();
      });
  });
});
