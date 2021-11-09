// Update with your config settings.
module.exports = {
    client: 'pg',
    connection: {
      host: "localhost",
      database: "test-project-backend",
      user: "postgres",
      password: "pl12e3asd0",
      port: 5432
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};
