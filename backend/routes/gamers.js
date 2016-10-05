var express = require('express');
var router = express.Router();
var Gamers = require('../lib/gamers')
var Games = require('../lib/games')

router.post('/login', function(req, res, next) {
  Gamers.accLogin(req.body.gamer_tag).then(function(data){
    console.log('req.body: ',req.body);
    console.log('data: ', data);
    if (data.rows[0]) {
      if (req.body.pw == data.rows[0].password) {
       console.log('matches');
      }else{
       console.log("pw don't match");
      }
    }else{
      console.log('not found');
    }
  })
});
router.post('/createAcc', function(req, res, next) {
  console.log('express backend req: ',req.body);
 Gamers.accLogin(req.body.gamer_tag).then(function(obj){
console.log('express backend obj: ', obj);
   if (!obj.rows[0]) {
   Gamers.createAcc(req.body).then(function(data){
     console.log('data: ', data);
     res.send(false)
   })
     }else{
     console.log('account found please log in');
     res.send(true)
 }
 })
});

module.exports = router;
