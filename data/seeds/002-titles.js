
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('titles').del()
    .then(function () {
      // Inserts seed entries
      return knex('titles').insert([
        {title: 'Throw Toys', user_id: 1},
        {title: 'Pull Sleigh', user_id: 2},
        {title: 'Bird watching', user_id: 3},
      ]);
    });
};
