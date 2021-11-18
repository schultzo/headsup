
exports.up = function(knex) {
    return knex.schema.createTable('heads', (table) => {
        table.increments('id').primary()
        table.string('summary')
        table.string('time')
        table.string('date')
        table.string('image')
    })
  
};

exports.down = function(knex) {
  return  knex.schema.dropTable('heads')
  
};
