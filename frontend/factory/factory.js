app.factory('GamesFactory', function ($routeParams, $http) {
  return {
    createAcc: function(gt, gpw, gi, gq){
      console.log('backend createAcc ',gt,gpw,gi,gq);
          var json =
          {	gamer_tag: gt,
    	      gamer_pw: gpw,
    	      gamer_icon: gi,
    	      gamer_quote: gq
          }
          return $http.post('http://localhost:3000/gamers/createAcc',json).then(function(data){
            console.log('data.data: ',data.data);
            console.log('accExisted: ', this.accExisted);

            if(data.data == false ){
              return true
            }else{
              return false
            }
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
      add: function (tea,qty) {
      },
      grand_total: function(){
      },
      delete_one: function(tea){
        var index = this.inventory.indexOf(tea)
        this.inventory.splice(index, 1)
      },
      edit_quantity: function(tea,qty){
      var index = this.inventory.indexOf(tea)
      this.inventory[index].order_quantity = qty
      }
    }
});
