const { Sequelize } = require('sequelize');

// Initialize Sequelize with database credentials
const sequelize = new Sequelize('projectkit', 'postgres', 1234, {
  host: 'localhost',
  dialect: 'postgres',
});

// Define models
const Asset = require('../models/Asset');
const Category = require('../models/Category');
const Employee = require('../models/Employee');
const History = require('../models/History');
const Issue = require('../models/Issue');
const Return = require('../models/Return');
const Scrap = require('../models/Scrap');
const Stock = require('../models/Stock');

// Define associations between models if needed
// For example:
// Asset.belongsTo(Category);
// Issue.belongsTo(Asset);
// Return.belongsTo(Asset);
// Scrap.belongsTo(Asset);
// Stock.belongsTo(Asset);

// Sync models with the database
async function syncModels() {
  try {
    await sequelize.sync({ alter: true }); // Alter table structure if models change
    console.log('Database synchronized with models.');
  } catch (error) {
    console.error('Error syncing database with models:', error);
  }
}

// Export the Sequelize instance, models, and syncModels function
module.exports = { sequelize, models: { Asset, Category, Employee, History, Issue, Return, Scrap, Stock }, syncModels };
