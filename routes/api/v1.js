const express = require('express');
let router = express.Router();

const example = require('../../controllers/api/v1/example');

router.use('/config', example);

module.exports = router;
