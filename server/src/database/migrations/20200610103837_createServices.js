exports.up = function(knex) {
    return knex.schema.createTable('services', table =>{
        table.string('id').primary();
        table.decimal('price').notNullable();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.integer('number_participants').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();

        table.string('user_id').notNullable().references('id').inTable('users');
        table.string('id_category').notNullable().references('id').inTable('category');


  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('services');
};
