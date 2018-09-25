/*const db = require('../models/db');
const User = require('../../user/models/user');

module.exports = class DBService {
    static async initDataBase() {
        try {
            await db.authenticate();
            await db.sync();
        }
        catch (err) {
            console.log('DBService.initDataBase => Error');
            console.log(err);
        }
    }
} */