const supertest = require("supertest");
const config = require("../config/config");

const request = supertest(config.baseURL);

module.exports = request;