const Sequelize = require('sequelize');
const db = require('../../db/models/db');
const User = db.define('user', {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        unique: true,
        primaryKey: true
    },
    /*id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }, */
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    },
    address: {
        type: Sequelize.STRING
    }
})

module.exports = User; 