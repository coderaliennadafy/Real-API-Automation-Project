const request = require('supertest');
const { expect } = require('chai');
const Ajv = require('ajv');

const config = require('../../config/config');
const userSchema = require('../../schemas/user.schema.json');

const api = request(config.baseURL);
const ajv = new Ajv();

describe('User Schema Validation', () => {

  it('should validate the user schema', async () => {

    const res = await api.get('/users/1');

    expect(res.status).to.equal(200);

    const validate = ajv.compile(userSchema);

    const isValid = validate(res.body);

    expect(isValid).to.equal(true);

  });

});