var express = require('express');
var router = express.Router();
var Knex = require('../db/knex');
var pg = require('pg');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/home');

});

module.exports = router;
