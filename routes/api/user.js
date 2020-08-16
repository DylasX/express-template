const express = require('express');
let router = express.Router();

const example = require('../../controllers/api/v1/example');

/**
 * get tests
 * @route GET /testss
 * @group tests
 * @returns {object} 200 - Success
 */
router.get('/test', example);

module.exports = router;
