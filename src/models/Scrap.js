const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Scrap = sequelize.define('Scrap', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  assetId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  scrapDate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  reason: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Scrap;
