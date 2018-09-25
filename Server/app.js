const express = require('express');
const app = express();
var router = require('./router');
const port = 3000;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api/v1', router);

app.use(function (req, res, next) {
  res.status(404).send('error 404!');
});

app.use(function (err, req, res, next) {
  res.status(500).send('error 500!');
});


app.listen(port, () => console.log(`Server started on port ${port}`));
