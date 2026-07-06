const { expect } = require('chai');

function validateStatus(response, expectedStatus) {
    expect(response.status).to.equal(expectedStatus);
}

function validateProperty(object, property) {
    expect(object).to.have.property(property);
}

function validateValue(actual, expected) {
    expect(actual).to.equal(expected);
}

module.exports = {
    validateStatus,
    validateProperty,
    validateValue
};