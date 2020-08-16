const express = require('express');
const router = express.Router();

/**
 * get tests
 * @route GET /testss
 * @group tests
 * @returns {object} 200 - Success
 */

router.get('/test', (req, res) => res.json({ ok: 'ok' }));

module.exports = router;
