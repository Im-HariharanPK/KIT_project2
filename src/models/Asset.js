const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Asset = sequelize.define('Asset', {
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  makeModel: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  serialNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = Asset;
