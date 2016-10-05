
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ratings', function(table){
  table.increments('id').primary();
  table.integer('gamer_id');
  table.integer('game_id');
  table.integer('rating');
  table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ratings');
};
