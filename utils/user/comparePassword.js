const bcrypt = require('bcrypt');

const comparePassword = async (password, hashed) => {
  if (bcrypt.compareSync(password, hash)) {
    return true;
  } else {
    return false;
  }
};

module.exports = comparePassword;
