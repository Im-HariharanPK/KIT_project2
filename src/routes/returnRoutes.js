const express = require('express');
const router = express.Router();
const returnController = require('../controllers/returnController');

router.post('/returnAsset', returnController.returnAsset);

module.exports = router;
