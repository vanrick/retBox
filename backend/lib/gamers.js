var knex = require('../db/knex');

function getAllGamesId(id){
  return knex.raw(`select game_id from user_games where gamer_id='${id}'`).then(function(game){
   return game.rows
 })
}
function getGames(id){
  return knex.raw(`select * from games where id='${id}'`).then(function(games){
    return games.rows
  })
}

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
  //  addToLikes: function(gamer_id, games_id){
  //    return knex.raw(`INSERT into likes
  //      VALUES (default,
  //        '${likes.gamer_id}',
  //        '${likes.games_id}'
  //      )`)
  //  },
  //  addToRatings: function(gamer_id, games_id){
  //    return knex.raw(`INSERT into likes
  //      VALUES (default,
  //        '${ratings.gamer_id}',
  //        '${ratings.games_id}'
  //      )`)
  //  },
  addToComments: function(gamer_id, game_id, comments){
      return knex.raw(`INSERT into comments
        VALUES (default,
          '${gamer_id}',
          '${game_id}',
          '${comments}'
        )`)
    },
   showAllComments: function(gamer_id, games_id){
     return knex.raw(`SELECT * from comments
       WHERE gamer_id = '${gamer_id}' and game_id='${games_id}'
       `)
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
   add_gamer_games: function(gamer_id, game_id){
    return knex.raw(`INSERT into user_games VALUES (default,
      '${gamer_id}',
      '${game_id}'
    )`)
   },
   remove_gamer_games: function(gamer_id, game_id){
    return knex.raw(`DELETE from user_games WHERE gamer_id='${gamer_id}'
      and game_id='${game_id}'`)
   },
   destroy: function(id){
     return knex.raw(`DELETE from gamers WHERE id=${id}`)
   },
   destroyGamerInUserGames: function(id){
     return knex.raw(`DELETE from games WHERE id=${id}`)
   },
   getAllGamesForUser: function(gamer_id){
     var all =[]
     return getAllGamesId(gamer_id).then(function(data){
       data.forEach(function(game_id){
         all.push(getGames(game_id.game_id))
       })
       return Promise.all(all).then(function(games){
         return games;
       });
     })
     }

   }
