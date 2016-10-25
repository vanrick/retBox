var express = require('express');
var router = express.Router();
var bookshelf = require("../db/bookshelf");
var Games = require('../lib/games')
var Gamers = require('../lib/gamers')
var sys = require('util')
var exec = require('child_process').exec;
var child;

router.post('/playIt', function(req,res,next){
  child = exec("mednafen ~/Downloads/Super\ Mario\ Bros.\ 3\ \(USA\).nes", function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
  // sys.print('stdout: ' + stdout);
  // sys.print('stderr: ' + stderr);
  if (error !== null) {
    console.log('exec error: ' + error);
  }
})
res.send('HITT!!!!')
});

router.post('/', function(req, res, next) {
  Games.all().then(function(data){
    // console.log('all games backend: ',data.rows);
   res.send(data)
  })
})

// router.post('/addUserGames', function(req, res, next){
//
// })
router.post('/gameRtg',function(req,res,next){
  Games.rtgExists(req.body.gamer_id,req.body.game_id).then(function(data){
    console.log(data);
    console.log('check if exists! ',data.rows.length);
    if (data.rows.length == 0) {
      console.log('hit!!');
      Games.createRtg(req.body.gamer_id,req.body.game_id,req.body.ratings).then(function(data2){
        console.log('hit create!!');
        console.log(data2);
      })
    }else{
      Games.updateRtg(req.body.gamer_id,req.body.game_id,req.body.ratings).then(function(data3){
        console.log("updating")
        console.log(data3);
      })
    }
    res.send('success ratings!')
  })
})

router.post('/defaultRtg',function(req,res,next){
  Games.allRtg(req.body.gamer_id).then(function(data){
    res.send(data)
  })
})



module.exports = router;
