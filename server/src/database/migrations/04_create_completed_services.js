
exports.up = function(knex) {
    return knex.schema.createTable('completed_services', table =>{
        table.increments()
        table.unique('id')
        table.string('user_assigned_id').notNullable().references('id').inTable('users').comment('Usuário que prestou')
        table.string('user_requested_id').notNullable().references('id').inTable('users').comment('Usuário que postou')
        table.string('service_id').notNullable().references('id').inTable('services')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('completed_services')
};
