const Sequelize = require('sequelize');
const sequelize = new Sequelize ('draence', 'joao', 'draence1234',{
    host: 'localhost',
    dialect: 'postgres'

});

module.exports = sequilize;