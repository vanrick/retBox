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
          return $http.post('http://localhost:3000/gamers/createAcc',json).then(function(data){

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
         console.log('oneUser: ',oneUser);
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
        return $http.post('http://localhost:3000/gamers/login',json).then(function(data){

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
          return $http.post(`http://localhost:3000/gamers/id`,name).then(function(data){
            oneUser = data

             return data
          })
        },
       deleteAcc: function(gamer_id){
         var json={
             id: gamer_id
             }
          return $http.post(`http://localhost:3000/gamers/delete`,json).then(function(data){
                return data
             })
       },
        gamesAll: function(){
         return $http.post(`http://localhost:3000/games`).then(function(data){
            allG = data.data
            return data
         })
        },
        addToUser: function(gamer_id,games_id){
          var json={
              gamer_id: gamer_id,
              games_id: games_id
              }
           return $http.post(`http://localhost:3000/gamers/userGames`,json).then(function(data){
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
      inventory: [],
      addGames: function (games) {
        this.inventory.push(games)
        console.log('games picked ',this.inventory);
      },
      addGamesToTable: function(gamer_id, games_id){
        var json={
            gamer_id: gamer_id,
            games_id: games_id
            }
         return $http.post(`http://localhost:3000/gamers/userGames`,json).then(function(data){
               console.log('factory addToUser: ',data);
              //  return data
            })
      },
      removeGamesFromTable: function(gamer_id, games_id){
        var json={
            gamer_id: gamer_id,
            games_id: games_id
            }
         return $http.post(`http://localhost:3000/gamers/removeUserGames`,json).then(function(data){
               console.log('factory removeToUser: ',data);
              //  return data
            })
      },
      removeGames: function(tea){
        var index = this.inventory.indexOf(tea)
        this.inventory.splice(index, 1)
        console.log('inventory: ',this.inventory);
      },
      allGamesForUser: function(gamer_id){
        var json={
          gamer_id: gamer_id
        }
        return $http.post(`http://localhost:3000/gamers/allGamesForUser`,json).then(function(data){
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
