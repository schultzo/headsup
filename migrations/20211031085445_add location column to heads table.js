
exports.up = function(knex) {

    return knex.schema.table('heads', function (table) {
        table.string('location');
      })

};

exports.down = function(knex) {
  
};
