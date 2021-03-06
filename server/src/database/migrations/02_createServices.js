exports.up = function(knex) {
    return knex.schema.createTable('services', table =>{
        table.string('id').primary().notNullable()
        table.unique('id')
        table.decimal('price').notNullable()
        table.string('title').notNullable()
        table.text('description').notNullable()
        table.string('city').notNullable()
        table.string('uf', 2).notNullable()

        table.boolean('status').defaultTo(false)

        table.string('user_id').notNullable().references('id').inTable('users')

        table.integer('category_id',10).unsigned()
        .notNullable().references('id').inTable('categories')
  })
}

exports.down = function(knex) {
    return knex.schema.dropTable('services')
}
