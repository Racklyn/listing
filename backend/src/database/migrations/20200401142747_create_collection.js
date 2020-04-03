
exports.up = function(knex) {
    return knex.schema.createTable('collection', function (table){
        table.increments() //id of the table
        table.string('title').notNullable(),
        table.string('description').notNullable(),
        table.string('color').notNullable(),

        
        table.string('user_id').notNullable(),
        table.foreign('user_id').references('id').inTable('user')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('collection')
};
