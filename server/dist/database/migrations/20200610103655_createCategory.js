'use strict';

exports.up = function (knex) {
    return knex.schema.createTable('categories', function (table) {
        table.increments();
        table.unique('id');
        table.string('title').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('categories');
};
//# sourceMappingURL=20200610103655_createCategory.js.map