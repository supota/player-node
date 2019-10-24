'use strict';
const loader = require('./sequelize');
const Sequelize = loader.Sequelize;

const Player = loader.database.define(
  'players',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    firstRoma: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastRoma: {
      type: Sequelize.STRING,
      allowNull: false
    },
    age: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    sex: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    bio: {
      type: Sequelize.STRING,
      allowNull: false
    },
    twitterID: {
      type: Sequelize.STRING
    },
    facebookID: {
      type: Sequelize.STRING
    },
    siteURL: {
      type: Sequelize.STRING
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false
    }
  },
  {
    freezeTableName: true,
    timestamps: true
  }
);

module.exports = Player;
