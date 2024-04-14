const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Issue = sequelize.define('Issue', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  assetId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  employeeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  issuedDate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  returnDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  reason: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Issue;
