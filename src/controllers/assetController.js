const express = require('express');
const router = express.Router();
const Asset = require('../models/Asset');

// Get all assets
router.get('/', async (req, res) => {
  try {
    const assets = await Asset.findAll();
    res.json(assets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Add a new asset
router.post('/add', async (req, res) => {
  const { type, makeModel, serialNumber } = req.body;
  try {
    const newAsset = await Asset.create({ type, makeModel, serialNumber });
    res.status(201).json(newAsset);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Update an existing asset
router.put('/edit/:id', async (req, res) => {
  const { id } = req.params;
  const { type, makeModel, serialNumber } = req.body;
  try {
    const asset = await Asset.findByPk(id);
    if (!asset) {
      return res.status(404).json({ message: 'Asset not found' });
    }
    asset.type = type;
    asset.makeModel = makeModel;
    asset.serialNumber = serialNumber;
    await asset.save();
    res.json(asset);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Delete an asset
router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const asset = await Asset.findByPk(id);
    if (!asset) {
      return res.status(404).json({ message: 'Asset not found' });
    }
    await asset.destroy();
    res.json({ message: 'Asset deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
