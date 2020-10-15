
exports.up = function(knex) {
    return knex.schema.createTable('service_providers', table =>{
        table.increments()
        table.unique('id')
        table.string('user_id').notNullable().references('id').inTable('users')
        
        table.unique('user_id')
        table.integer('finished_works').defaultTo(0)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('service_providers')
};
