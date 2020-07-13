
exports.up = function(knex) {
    return knex.schema.createTable('users', table =>{
        table.string('id').primary();
        table.string("third_party_id");
        table.unique("third_party_id");
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.unique('email');
        table.string('image_url').defaultTo('uploads/default.png');
        table.binary('password', 16535);
        table.string('whatsapp');
        table.string('city');
        table.string('uf',2);
        table.unique('whatsapp');
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
