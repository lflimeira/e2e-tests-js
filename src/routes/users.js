var express = require('express');
var router = express.Router();
var path    = require("path");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../../public/login.html'));
});

/* GET users listing. */
router.get('/new', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../../public/add_user.html'));
});

module.exports = router;
