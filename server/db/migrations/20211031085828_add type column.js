
exports.up = function(knex) {
  
    return knex.schema.table('heads', function (table) {
        table.string('type');
      })

};

exports.down = function(knex) {
  
};
