
exports.up = function(knex, Promise) {
  return knex.schema.createTable('gamers', function(table){
  table.increments('id').primary();
  table.string('gamer_tag');
  table.string('gamer_icon');
  table.string('gamer_pw')
  table.string('gamer_quote');
  table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('gamers');
};
