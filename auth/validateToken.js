const jwt = require('jsonwebtoken');

const secret = 'abc';

module.exports = (payload) => {
  try {
    return jwt.verify(payload, secret);
  } catch (_err) {
    return null;
  }
};