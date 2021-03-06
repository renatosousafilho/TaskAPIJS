const jwt = require('jsonwebtoken');

const secret = 'abc';

const createToken = (payload) => {
  return jwt.sign(payload, secret);
};

module.exports = createToken;