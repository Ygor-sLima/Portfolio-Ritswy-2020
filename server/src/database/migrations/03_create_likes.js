exports.up = function (knex) {
    return knex.schema.createTable('likes',table => {
        table.integer('fkComment')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('comments');
        
        table.integer('fkUser')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users');
        table.primary(['fkComment','fkUser']);
        table.boolean('like').notNullable();
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('likes');
}