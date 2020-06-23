exports.up = function (knex) {
    return knex.schema.createTable('comments',table => {
        table.increments('id').primary();
        table.string('fkUser')
            .notNullable()
            .references('id')
            .inTable('users');
        table.string('fkMovie')
            .notNullable()
            .references('id')
            .inTable('movies');
        table.string('comment').notNullable();
        table.date('data').notNullable();
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('comments');
}