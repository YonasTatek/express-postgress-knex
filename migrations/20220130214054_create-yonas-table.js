
exports.up = function(knex) {
    knex.schema.createTable('users', function (table) {
        table.increments();
        table.string('name');
        table.timestamps();
      })
};

exports.down = function(knex) {
  
};
