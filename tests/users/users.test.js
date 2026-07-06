const request = require('supertest');
const {expect} = require('chai');

const config = require('../../config/config');
const api = request(config.baseURL);

describe('Users API', () => {

  it('Get users', async () => {
    const res = await api.get('/users');
    expect(res.status).to.equal(200);
  });
});
