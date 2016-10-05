
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', function(table){
  table.increments('id').primary();
  table.integer('gamer_id');
  table.integer('game_id');
  table.string('comments');
  table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('comments');
};
