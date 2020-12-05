
exports.up = function(knex) {
    return knex.schema.createTable('categories', table =>{
        table.increments()
        table.unique('id')
        table.string('title').notNullable()
  })
}

exports.down = function(knex) {
    return knex.schema.dropTable('categories')
}
