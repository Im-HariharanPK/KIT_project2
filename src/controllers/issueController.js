const Issue = require('../models/Issue');

const issueAsset = async (req, res) => {
  const { employeeId, assetId, issueReason } = req.body;
  try {
    // Create a new issue entry in the database
    await Issue.create({ employeeId, assetId, issueReason });
    res.redirect('/issues');
  } catch (error) {
    res.status(500).send('Error issuing asset');
  }
};

module.exports = {
  issueAsset,
};
