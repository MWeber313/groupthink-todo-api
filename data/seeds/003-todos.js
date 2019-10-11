
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {completed: false, task: "Get toys to throw", title_id: 1},
        {completed: false, task: "Hit target", title_id: 1},
        {completed: false, task: "Put on harness", title_id: 2},
        {completed: false, task: "Learn to fly", title_id: 2},
        {completed: false, task: "Get binoculars", title_id: 3},
        {completed: false, task: "Put on coat", title_id: 3},
      ]);
    });
};
