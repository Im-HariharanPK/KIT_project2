const express = require('express');
const router = express.Router();
const assetController = require('../controllers/assetController');

// Routes for asset management
router.get('/', assetController.getAllAssets);
router.post('/add', assetController.addAsset);
router.put('/edit/:id', assetController.editAsset);
router.delete('/delete/:id', assetController.deleteAsset);

module.exports = router;
