const History = require('../models/History');

const getAssetHistory = async (req, res) => {
  try {
    const assetHistory = await History.findAll();
    res.render('history', { assetHistory });
  } catch (error) {
    res.status(500).send('Error retrieving asset history');
  }
};

module.exports = {
  getAssetHistory,
};
