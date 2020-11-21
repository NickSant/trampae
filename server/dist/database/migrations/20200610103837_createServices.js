'use strict';

exports.up = function (knex) {
    return knex.schema.createTable('services', function (table) {
        table.string('id').primary().notNullable();
        table.unique('id');
        table.decimal('price').notNullable();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();

        table.string('user_id').notNullable().references('id').inTable('users');

        table.integer('category_id', 10).unsigned().notNullable().references('id').inTable('categories');

        table.integer('service_provider_id').unsigned().references('id').inTable('service_providers').defaultTo(null);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('services');
};
//# sourceMappingURL=20200610103837_createServices.js.map