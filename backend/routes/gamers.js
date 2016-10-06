var express = require('express');
var router = express.Router();
var Gamers = require('../lib/gamers')
var Games = require('../lib/games')

router.post('/login', function(req, res, next) {
  Gamers.accLogin(req.body.gamer_tag).then(function(data){
    console.log('data id ',data.rows[0].id);
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
      console.log('backend findOne obj: ',obj);
    })
    //  res.send(data)
})

module.exports = router;
