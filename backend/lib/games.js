var knex = require('../db/knex');

module.exports = {
  create: function(games){
  return knex.raw(`INSERT into games
  VALUES (default, '${games.console}','${games.game_name}')`)
  },
  all: function(){
   return knex.raw('SELECT * from games')
  },
  find: function(id){
   return knex.raw(`SELECT * from games WHERE id=${id}`)
  },
  addUserGames: function(){
    return knex.raw(``)
    /// users adding games, along with games comments, ratings, likes
  },
  // findOne: function(id){
  //  return knex.raw(`SELECT name from trainers WHERE id = (SELECT trainer_id from pokemon WHERE id=${id})`)
  // },
  // updateTrainerId: function(train){
  //   return knex.raw(`SELECT id FROM trainers where name='${train}'`)
  // },
  // updateOne: function(id,games){
  //  return knex.raw(`UPDATE games SET console='${games.console}',game_name='${games.game_name}', trainer_id='${games.trainer_id}' WHERE id = ${id}`)
  // },
  destroyGamerInGamers: function(id){
   return knex.raw(`DELETE from user_games WHERE id=${id}`)
  },
  destroyGamerInLikes: function(id){
   return knex.raw(`DELETE from likes WHERE gamer_id=${id}`)
  },

 //   updateGym: function(id, pokemon){
 //   return knex.raw(`UPDATE pokemon set in_gym=${pokemon} WHERE id = ${id}`)
 // },
 //   removeGym: function(id){
 //   return knex.raw(`UPDATE pokemon set in_gym=false WHERE id = ${id}`)
 // }
 }
