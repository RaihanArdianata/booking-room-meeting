const jwt = require('jsonwebtoken');

function generate_token(payload) {
  const token = jwt.sign(payload, 'rahasia');
  return token
}

function decode_token(token) {
  const decoded = jwt.verify(token, 'rahasia');
  return decoded
}

module.exports = {
  generate_token,
  decode_token
}