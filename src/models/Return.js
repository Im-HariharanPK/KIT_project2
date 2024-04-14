const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Return = sequelize.define('Return', {
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
  returnedDate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  reason: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Return;
