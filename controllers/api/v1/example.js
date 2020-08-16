const { userAuth, Op } = require('../../../models/index');
module.exports = async (req, res) => {
  const data = await userAuth.findAll();
  return res.status(200).json({ data, message: 'ok' });
};
