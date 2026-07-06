const request = require('supertest');
const config = require('../config/config');

const api = request(config.baseURL);

async function get(endpoint) {
    return await api.get(endpoint);
}

async function post(endpoint, data) {
    return await api.post(endpoint).send(data);
}

async function put(endpoint, data) {
    return await api.put(endpoint).send(data);
}

async function del(endpoint) {
    return await api.delete(endpoint);
}

module.exports = {
    get,
    post,
    put,
    del
};