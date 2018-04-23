const express = require('express')
const router = express.Router()
const path    = require("path")
const userValidation = require("../middlewares/users-validation")

const publicPath = __dirname + '/../../public/'

/* GET users' login form. */
router.post('/', userValidation.addUser, function(req, res, next) {
    res.status(200).send({ msg: "User registered =)" })
});

/* GET users' login form. */
router.get('/login', function(req, res, next) {
  res.sendFile(path.join(`${publicPath}login.html`))
});

/* GET users' sign up. */
router.get('/new', function(req, res, next) {
  res.sendFile(path.join(`${publicPath}add_user.html`))
});

module.exports = router
