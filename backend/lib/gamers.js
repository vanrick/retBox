var knex = require('../db/knex');

module.exports = {
   createAcc: function(gamer){
    return knex.raw(`INSERT into gamers
    VALUES (default,
      '${gamer.gamer_tag}',
      '${gamer.gamer_icon}',
      '${gamer.gamer_pw}',
      '${gamer.gamer_quote}'
           )`)
  },
   accLogin: function(gamerTag){
     return knex.raw(`SELECT * from gamers WHERE gamer_tag = '${gamerTag}'`)
   },
   findOne: function(gamerTag){
     return knex.raw(`SELECT * from gamers WHERE gamer_tag = '${gamerTag}'`)
   },
   all: function(){
   return knex.raw('SELECT * from gamers')
   },
   gamer_games: function(user_id, game_id){
    return knex.raw(`INSERT into user_games VALUES (default,
      '${user_games.gamer_id}',
      '${user_games.game_id}'
    )`)
   },
   destroy: function(id){
     return knex.raw(`DELETE from gamers WHERE id=${id}`)
   },
   destroyGamerInUserGames: function(id){
     return knex.raw(`DELETE from games WHERE id=${id}`)
   }
}
