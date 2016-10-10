var express = require('express');
var router = express.Router();
var bookshelf = require("../db/bookshelf");
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
  Gamers.add_gamer_games(req.body.gamer_id, req.body.games_id).then(function(data){
    res.send('added successfully!')
  })
})

router.post('/removeUserGames',function(req,res,next){
  Gamers.remove_gamer_games(req.body.gamer_id, req.body.games_id).then(function(data){
    res.send('remove successfully!')
  })
})

router.post('/delete',function(req,res,next){
  Gamers.destroy(req.body.id).then(function(data){
    Games.destroyGamerInGamers(data.id);
    Games.destroyGamerInLikes(data.id);
    Gamers.destroyGamerInUserGames(data.id);
    res.send('delete successfully!')
  })
})

router.post('/allGamesForUser',function(req,res,next){
  Gamers.getAllGamesForUser(req.body.gamer_id).then(function(data){
    // console.log('req.body: ', req.body);
    // console.log('all games for one user: ', data);
    res.send(data)
  })
})

router.post('/addComments',function(req,res,next){
  Gamers.addToComments(req.body.gamer_id,req.body.game_id,req.body.comments).then(function(data){
    console.log('req.body for comments: ', req.body);
    res.send('added comments!')
  })
})
router.post('/showAllComments',function(req,res,next){
  Gamers.showAllComments(req.body.gamer_id,req.body.game_id).then(function(data){
    console.log('req.body for comments: ', req.body);
    res.send(data)
  })
})

module.exports = router;
