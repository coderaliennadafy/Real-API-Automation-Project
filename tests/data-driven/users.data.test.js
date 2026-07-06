const request = require('supertest');
const { expect } = require('chai');

const config = require('../../config/config');
const usersData = require('../../data/users.data.json');

const api = request(config.baseURL);

describe('Users API', () => {

  it('should get all users', async () => {
    const res = await api.get('/users');

    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
  });

  it('should get a user by id', async () => {
    const res = await api.get('/users/1');

    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('id', 1);
  });

  it('should create a user', async () => {
    const res = await api.post('/users').send(usersData.validUser);

    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('id');
  });

  it('should update a user', async () => {
    const res = await api.put('/users/1').send(usersData.updatedUser);

    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('name', usersData.updatedUser.name);
  });

  it('should delete a user', async () => {
    const res = await api.delete('/users/1');

    expect(res.status).to.equal(200);
  });

});