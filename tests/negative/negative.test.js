const request = require('supertest');
const { expect } = require('chai');

const api = request('https://jsonplaceholder.typicode.com');

describe('Negative Tests', () => {

  it('wrong endpoint', async () => {
    const res = await api.get('/invalid');
    expect(res.status).to.equal(404);
  });

  it('user not found', async () => {
    const res = await api.get('/users/9999');
    expect(res.status).to.equal(404);
  });

});