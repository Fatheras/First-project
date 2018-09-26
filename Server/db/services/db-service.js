const db = require('../models/db');
const User = require('../../user/models/user');
const seederService = require('../../seeders/services/seeder-service');
const migrationService = require('../../migrations/services/migration-service');


module.exports = class DBService {
    static async initDataBase() {
        try {
            await db.authenticate();
            await db.sync();
            seederService.runSeeders;
            //migrationService.runMigrations();
        }
        catch (err) {
            console.log('DBService.initDataBase => Error');
            console.log(err);
        }
    }
} 