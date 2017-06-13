app.factory('GamesFactory', function ($routeParams, $http) {
  var oneLogin = 'default';
  var oneUser;
  var allG;
  var allGforOneUser;
  return {
    createAcc: function(gt, gpw, gi, gq){
          var json =
          {	gamer_tag: gt,
    	      gamer_pw: gpw,
    	      gamer_icon: gi,
    	      gamer_quote: gq
          }
          return $http.post('https://retbox.herokuapp.com/gamers/createAcc',json).then(function(data){

            if(data.data == false ){
              return true
            }else{
              return false
            }
          })
       },
       getLogin: function(){
         return oneLogin;
       },
       getOneObj: function(){
         return oneUser
       },
       getAllGforOne: function(){
         return allGforOneUser;
       },
       getAllG: function(){
         return allG
       },
       accLogin: function(gt, gpw){
        var gts = gt
          oneLogin = gts

        var json = {
          	gamer_tag: gt,
            gamer_pw: gpw
        }
        return $http.post('https://retbox.herokuapp.com/gamers/login',json).then(function(data){

          if(data.data == 'PW matches'){
            return true
          }else if(data.data == "PW don't match"){
            return false
          }else{
            return 'ACC not found'
          }
        })
      },
       findOne: function(gt){
        var name = {gamer_tag: gt}
          return $http.post(`https://retbox.herokuapp.com/gamers/id`,name).then(function(data){
            oneUser = data

             return data
          })
        },
       deleteAcc: function(gamer_id){
         var json={
             id: gamer_id
             }
          return $http.post(`https://retbox.herokuapp.com/gamers/delete`,json).then(function(data){
                return data
             })
       },
        gamesAll: function(){
         return $http.post(`https://retbox.herokuapp.com/games`).then(function(data){
            allG = data.data
            return data
         })
        },
        addToUser: function(gamer_id,games_id){
          var json={
              gamer_id: gamer_id,
              games_id: games_id
              }
           return $http.post(`https://retbox.herokuapp.com/userGames`,json).then(function(data){
                 return data
              })
        },
      gamer_icons:[  'http://findicons.com/files/icons/1700/2d/512/game.png',
                     'http://findicons.com/files/icons/75/i_like_buttons_3a/512/cute_ball_games.png',
                     'https://cdn3.iconfinder.com/data/icons/line/36/ghost-512.png',
                     'http://www.picturetopeople.org/logos/generator/examples/3d-game-logo-icon-1.jpg',
                     'http://images2.fanpop.com/image/photos/13000000/icons-bieber-justin-bieber-13048965-200-200.jpg',
                     'http://www.iconarchive.com/download/i27081/ph03nyx/super-mario/Flower-Fire.ico',
                     'http://66.media.tumblr.com/tumblr_lvaj4kSscM1r6ewz4o1_540.png',
                     'https://cdn4.iconfinder.com/data/icons/smashicons-game-flat/60/42_-_The_Triforce_Flat-512.png',
                     'http://www.freeiconspng.com/uploads/pokeball-icon-14.png',
                     'http://megaicons.net/static/img/icons_sizes/189/462/256/street-fighter-akuma-icon.png'
                   ],
      singlePost: [],
      addIndGamers: function(post){
       this.singlePost = []
       this.singlePost.push(post)
      //  console.log("singleLadies: " ,this.singlePost);
      },
      findRtg: function(gmrId,gmId,rtg){
        var json = {
          gamer_id: gmrId,
          game_id: gmId,
          ratings: rtg
        }
         return $http.post(`https://retbox.herokuapp.com/games/gameRtg`,json).then(function(data){
           return data
         })
      },
      defaultRtg: function(gmrId){
        var json={
          gamer_id: gmrId
        }
         return $http.post(`https://retbox.herokuapp.com/games/defaultRtg`,json).then(function(data){
           return data
         })
      },
      votes: [
      {
          "votes": 0
      },
      {
          "votes": 0
      },
      {
          "votes": 0
      },
      {
          "votes": 0
      },
      {
          "votes": 0
      },
      {
          "votes": 0
      },
      {
          "votes": 0
      },
      {
          "votes": 0
      },
      {
          "votes": 0
      },
      {
          "votes": 0
      }
      ],
      addComments:function(gmrId, gmId,comments){
        var json={
          gamer_id: gmrId,
          game_id: gmId,
          comments: comments
        }
        return $http.post(`https://retbox.herokuapp.com/gamers/addComments`,json).then(function(data){
          //  console.log('adding comments to table factory: ',data);
        })
      },
      showAllComments:function(gmrId, gmId){
        var json={
          gamer_id: gmrId,
          game_id: gmId
        }
        return $http.post(`https://retbox.herokuapp.com/gamers/showAllComments`,json).then(function(data){
          // console.log('show all comments in factory: ', data);
          return data
        })
      },
      inventory: [],
      addGames: function (games) {
        this.inventory.push(games)
        // console.log('games picked ',this.inventory);
      },
      addGamesToTable: function(gamer_id, games_id){
        var json={
            gamer_id: gamer_id,
            games_id: games_id
            }
         return $http.post(`https://retbox.herokuapp.com/gamers/userGames`,json).then(function(data){
              //  console.log('factory addToUser: ',data);
              //  return data
            })
      },
      removeGamesFromTable: function(gamer_id, games_id){
        var json={
            gamer_id: gamer_id,
            games_id: games_id
            }
         return $http.post(`https://retbox.herokuapp.com/gamers/removeUserGames`,json).then(function(data){
              //  console.log('factory removeToUser: ',data);
              //  return data
            })
      },
      removeGames: function(tea){
        var index = this.inventory.indexOf(tea)
        this.inventory.splice(index, 1)
        // console.log('inventory: ',this.inventory);
      },
      allGamesForUser: function(gamer_id){
        var json={
          gamer_id: gamer_id
        }
        return $http.post(`https://retbox.herokuapp.com/gamers/allGamesForUser`,json).then(function(data){
          return data
        })
      },
      playTime: function(){
        return $http.post(`https://retbox.herokuapp.com/games/playIt`).then(function(data){
          return data
        })
      },
      grand_total: function(){
      },
      edit_quantity: function(tea,qty){
      var index = this.inventory.indexOf(tea)
      this.inventory[index].order_quantity = qty
    },

    }
});

// })
