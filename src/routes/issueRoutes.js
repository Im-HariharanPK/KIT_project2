const express = require('express');
const router = express.Router();
const issueController = require('../controllers/issueController');

router.post('/issueAsset', issueController.issueAsset);

module.exports = router;
