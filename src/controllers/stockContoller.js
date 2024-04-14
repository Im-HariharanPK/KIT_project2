const Stock = require('../models/Stock');

const getStockView = async (req, res) => {
  try {
    const stockView = await Stock.findAll();
    res.render('stock', { stockView });
  } catch (error) {
    res.status(500).send('Error retrieving stock view');
  }
};

module.exports = {
  getStockView,
};
