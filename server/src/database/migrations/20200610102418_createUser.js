
exports.up = function(knex) {
    return knex.schema.createTable('users', table =>{
        table.string('id').primary().notNullable()
        table.unique('id')

        table.string("third_party_id")
        table.unique("third_party_id")

        table.string('name').notNullable()

        table.string('email').notNullable()
        table.unique('email')
        table.string('image_url').defaultTo('uploads/default.png')
        table.binary('password', 16535)
        table.string('city')
        table.string('uf',2)
        table.string('whatsapp')
        table.unique('whatsapp')

        table.integer('total_trampos').defaultTo(0)

        table.boolean('is_verified_mail').defaultTo(false).notNullable()

        table.string('hash_url_to_change_pass')
        table.unique('hash_url_to_change_pass')
        table.timestamp('req_change_pass_time').defaultTo(knex.fn.now())

  })
}

exports.down = function(knex) {
    return knex.schema.dropTable('users')
}
