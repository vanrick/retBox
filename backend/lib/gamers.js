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
  }
}
