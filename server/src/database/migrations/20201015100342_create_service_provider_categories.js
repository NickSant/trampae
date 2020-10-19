
exports.up = function(knex) {
    return knex.schema.createTable('service_provider_categories', table =>{
        table.increments()
        table.unique('id')

        table.integer('service_provider_id',10).unsigned()
        .notNullable().references('id').inTable('service_providers')

        table.integer('category_id',10).unsigned()
        .notNullable().references('id').inTable('categories')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('service_provider_categories')
};
