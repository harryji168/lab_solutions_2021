exports.up = function (knex) {
    return knex.schema.createTable('countries', table => {
        table.bigIncrements('id');
        table.string('name');
        table.string('code');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('countries');
};
