var express = require('express');
var router = express.Router();
var Games = require('../lib/games')
var Gamers = require('../lib/gamers')


router.post('/', function(req, res, next) {
  Games.all().then(function(data){
    console.log('all games backend: ',data.rows);
   res.send(data)
  })
})

router.post('/addUserGames', function(req, res, next){
  
})



module.exports = router;
