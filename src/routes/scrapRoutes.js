const express = require('express');
const router = express.Router();
const scrapController = require('../controllers/scrapController');

router.post('/scrapAsset', scrapController.scrapAsset);

module.exports = router;
