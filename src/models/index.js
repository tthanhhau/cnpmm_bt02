'use strict';

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME || 'bt02db',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || '',
  {
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: process.env.DB_DIALECT || 'mysql',
    logging: false,
  }
);

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// load model User
db.User = require('./user')(sequelize, DataTypes);

module.exports = db;
