exports.up = function (knex) {
    return knex.schema.createTable('comments',table => {
        table.increments('id').primary();
        
        table.integer('fkUser')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users');
        
        table.integer('fkMovie')
            .unsigned()
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