'use strict';

exports.up = function (knex) {
    return knex.schema.createTable('user_pf', function (table) {
        table.increments();
        table.unique('id');

        table.string('user_id').notNullable().references('id').inTable('users');
        table.unique('user_id');

        table.string('cpf', 15).notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('user_pf');
};
//# sourceMappingURL=20201015100240_create_user_pf.js.map