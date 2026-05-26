import request from 'supertest';
import { expect } from 'chai';

const api = request('https://jsonplaceholder.typicode.com');

describe('Users API', () => {

  it('should get all users', async () => {
    const res = await api.get('/users');

    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
  });

  it('should get a user by id', async () => {

    const res = await api.get(`/users/1`);

    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('id', 1);

  });
  
  it('should create a user', async () => {
    const res = await api.post('/users').send({
      name: 'Ali',
      username: 'alienn',
      email: 'ali@test.com'
    });

    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('id');
  });

  it('should update a user', async () => {
    const res = await api.put('/users/1').send({
      name: 'Ali Ennadafy',
      email: 'ali.updated@test.com'
    });

    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('name', 'Ali Ennadafy');
  });

  it('should delete a user', async () => {
    const res = await api.delete('/users/1');

    expect(res.status).to.equal(200);
  });
});