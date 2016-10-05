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
  // findOne: function(id){
  //  return knex.raw(`SELECT name from trainers WHERE id = (SELECT trainer_id from pokemon WHERE id=${id})`)
  // },
  // updateTrainerId: function(train){
  //   return knex.raw(`SELECT id FROM trainers where name='${train}'`)
  // },
  // updateOne: function(id,games){
  //  return knex.raw(`UPDATE games SET console='${games.console}',game_name='${games.game_name}', trainer_id='${games.trainer_id}' WHERE id = ${id}`)
  // },
  destroy: function(id){
   return knex.raw(`DELETE from games WHERE id=${id}`)
 },
 //   updateGym: function(id, pokemon){
 //   return knex.raw(`UPDATE pokemon set in_gym=${pokemon} WHERE id = ${id}`)
 // },
 //   removeGym: function(id){
 //   return knex.raw(`UPDATE pokemon set in_gym=false WHERE id = ${id}`)
 // }
 }
