'use strict';
const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:root@localhost/supota', {
  operatorsAliases: false
});

module.exports = {
  database: sequelize,
  Sequelize: Sequelize
};
