var express = require('express');
var router = express.Router();
const users = require('./user.js');

router.use(function timeLog(req, res, next) {
  next();
});

router.get('/user', (req, res) => {
    res.json(users());
});

module.exports = router;