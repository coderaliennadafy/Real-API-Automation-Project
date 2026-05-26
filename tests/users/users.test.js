const request = require('supertest');
const {expect} = require('chai');

const api = request('https://jsonplaceholder.typicode.com');

describe('Users API', () => {

  it('Get users', async () => {
    const res = await api.get('/users');
    expect(res.status).to.equal(200);
  });
});
