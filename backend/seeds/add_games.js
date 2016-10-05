exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('games').del(),

    // Inserts seed entries
    knex('games').insert({id: 1, console: "NES", game_name: "Super Mario 3" }),
    knex('games').insert({id: 2, console: "NES", game_name: "Mike Tyson's Punchout" }),
    knex('games').insert({id: 3, console: "NES", game_name: "Contra" }),
    knex('games').insert({id: 4, console: "SNES", game_name: "Street Fighter II Turbo" }),
    knex('games').insert({id: 5, console: "SNES", game_name: "Super Mario Kart" }),
    knex('games').insert({id: 6, console: "SNES", game_name: "StarFox" }),
    knex('games').insert({id: 7, console: "NES64", game_name: "Super Smash Bros." }),
    knex('games').insert({id: 8, console: "NES64", game_name: "NBA Jam" }),
    knex('games').insert({id: 9, console: "NES64", game_name: "Mario Party 3" })
  );
};
