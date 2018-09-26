var express = require('express');
var router = express.Router();
//const User = require('./user.js'); 
//let user = new User();
//const Users = require('./user.js');

router.use(function timeLog(req, res, next) {
  next();
});

router.get('/user', (req, res) => {
    //res.json(Users())
});

module.exports = router; 