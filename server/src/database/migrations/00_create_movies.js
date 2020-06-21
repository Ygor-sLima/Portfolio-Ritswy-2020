exports.up = function (knex) {
    return knex.schema.createTable('movies',table => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('idIMDb').notNullable();
        table.string('released').notNullable(); //Maybe some kind of date?
        table.integer('runtime').notNullable();
        table.string('genre').notNullable();
        table.string('director').notNullable();
        table.string('plot', 1000).notNullable();
        table.string('poster', 1000).notNullable();
        table.string('ratings').notNullable();
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('movies');
}