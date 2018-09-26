const User = require('../models/user');

module.exports = class UserService {
    constructor() {
    }
    getAllUsers() {
        return User.findAll();
    }
} 