
exports.up = function(knex) {
    return knex.schema.createTable('item', function (table){
        table.increments('id') //id of the table
        table.string('text').notNullable(),
        table.integer('priority').notNullable(),
        table.boolean('marked').notNullable(),

        
        table.integer('collection_id').notNullable(),
        table.foreign('collection_id').references('id').inTable('collection')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('item')
};
