const db = require('../models/db');
//const seederService = require('../../seeders/services/seeder-service');
//const migrationService = require('../../migrations/services/migration-service');


module.exports = class DBService {
    static async initDataBase() {
        try {
            await db.authenticate();
            await db.sync();
            //migrationService.runMigrations();            
            //seederService.runSeeders();
        }
        catch (err) {
            console.log('DBService.initDataBase => Error');
            console.log(err);
        }
    }
} 