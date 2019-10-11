
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
      tbl.increments()
      tbl.string('name').notNullable()
  }).createTable('titles', tbl => {
      tbl.increments()
      tbl.string('title').notNullable()
      tbl.integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .notNullable()
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  }).createTable('todos', tbl => {
      tbl.increments()
      tbl.boolean('completed').defaultTo(false)
      tbl.string('task', 255).notNullable()
      tbl.integer('title_id')
      .references('id')
      .inTable('titles')
      .notNullable()
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('todos').dropTableIfExists('titles').dropTableIfExists('users')
};
