module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'knex_labs'
    }
  },
  migrations: {
    tableName: 'migrations',
    directory: 'db',
  }
};
