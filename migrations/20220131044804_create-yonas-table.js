
exports.up = function(knex) {
    return knex.schema.createTable('users', function (table) {
        table.increments();
        table.string('name');
    
      })
};

exports.down = function(knex) {
  
};
