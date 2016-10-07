
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_games', function(table){
  table.increments('id').primary();
  table.integer('gamer_id');
  table.integer('game_id');
  table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user_games');
};
