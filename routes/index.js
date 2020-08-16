const apiRoute = require('./api/v1');

const init = (app) => {
  app.get('*', function (req, res, next) {
    return next();
  });
  app.use('/api', apiRoute);
};

module.exports = {
  init: init,
};
