const Return = require('../models/Return');

const returnAsset = async (req, res) => {
  const { employeeId, assetId, returnReason } = req.body;
  try {
    // Create a new return entry in the database
    await Return.create({ employeeId, assetId, returnReason });
    res.redirect('/returns');
  } catch (error) {
    res.status(500).send('Error returning asset');
  }
};

module.exports = {
  returnAsset,
};
