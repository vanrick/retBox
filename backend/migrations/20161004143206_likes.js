
exports.up = function(knex, Promise) {
  return knex.schema.createTable('likes', function(table){
  table.increments('id').primary();
  table.integer('gamer_id');
  table.integer('game_id');
  table.boolean('likes')
  table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('likes');
};
