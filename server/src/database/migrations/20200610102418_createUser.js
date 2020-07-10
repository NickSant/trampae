
exports.up = function(knex) {
    return knex.schema.createTable('users', table =>{
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.unique('email');
        table.string('image_url');
        table.unique('image_url');
        table.binary('password', 16535).notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf',2).notNullable();
        table.unique('whatsapp');
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
