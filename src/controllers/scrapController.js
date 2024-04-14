const Scrap = require('../models/Scrap');

const scrapAsset = async (req, res) => {
  const { assetId, reason } = req.body;
  try {
    // Create a new scrap entry in the database
    await Scrap.create({ assetId, reason });
    res.redirect('/scraps');
  } catch (error) {
    res.status(500).send('Error scrapping asset');
  }
};

module.exports = {
  scrapAsset,
};
