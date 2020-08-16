const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
  let hash = bcrypt.hashSync(password, 10);
  return hash;
};

module.exports = hashPassword;
