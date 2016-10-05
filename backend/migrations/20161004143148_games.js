
exports.up = function(knex, Promise) {
  return knex.schema.createTable('games', function(table){
  table.increments('id').primary();
  table.string('console');
  table.string('game_name');
  table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('games');
};
