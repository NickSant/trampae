
exports.up = function(knex) {
    return knex.schema.createTable('user_pj', table =>{
        table.increments()
        table.unique('id')
        
        table.string('user_id').notNullable().references('id').inTable('users')
        table.unique('user_id')
        
        table.string('cpnj', 20).notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('user_pj')
};
