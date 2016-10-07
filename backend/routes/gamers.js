var express = require('express');
var router = express.Router();
var Gamers = require('../lib/gamers')
var Games = require('../lib/games')

router.post('/login', function(req, res, next) {
  Gamers.accLogin(req.body.gamer_tag).then(function(data){
    // console.log('data id: ',data.rows);
    if (data.rows[0]) {
      if (req.body.gamer_pw == data.rows[0].gamer_pw) {
       res.send('PW matches');
      }else{
       res.send("PW don't match")
      }
    }else{
      res.send('ACC not found');
    }
  })
});
router.post('/createAcc', function(req, res, next) {
 Gamers.accLogin(req.body.gamer_tag).then(function(obj){
   if (!obj.rows[0]) {
   Gamers.createAcc(req.body).then(function(data){
     res.send(false)
   })
     }else{
     res.send(true)
 }
 })
})
router.post('/id', function(req,res,next){
    Gamers.findOne(req.body.gamer_tag).then(function(obj){
      res.send(obj)
    })
})
router.post('/',function(req,res,next){
  Gamers.all().then(function(data){
    res.send(data)
  })
})
router.post('/userGames',function(req,res,next){
  Gamers.gamer_games(req.body).then(function(data){
    if (req.body.gamer_id, req.body.games_id) {

    }
    res.send()
  })
})
router.post('/delete',function(req,res,next){
  Gamers.destroy(req.body.id).then(function(data){
    console.log('delete path req.body: ',req.body);
    Games.destroyGamerInGamers(data.id);
    Games.destroyGamerInLikes(data.id);
    Gamers.destroyGamerInUserGames(data.id);
    res.send('delete successful!')
  })
  //console.log('data in delete ', data);
})

module.exports = router;
