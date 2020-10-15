exports.up = function(knex) {
    return knex.schema.createTable('change_pass_occurrences', table =>{
        table.increments()
        table.unique('id')
        table.string('user_id').notNullable().references('id').inTable('users')
        
        table.string('hash_url')
        table.unique('hash_url')

        table.boolean('status').defaultTo(false)

        table.timestamp('created_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('change_pass_occurrences')
};
