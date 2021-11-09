const connectionConfig = require('./config');

const commonOptions = {
    client: "pg",
    pool: {
        min: 2,
        max: 10
    },
    connection: connectionConfig.default
};

const seedsAndMigrationsConfig = {
    migrations: {
        directory: "./migrations",
        tableName: "knex_migrations"
    },
    seeds: {
        directory: "./seeds",
        loadExtensions: [".js"],
        stub: "./seeds/utils/seed_stub.js",
    }
};

const knexConfig = {
    ...commonOptions,
    ...seedsAndMigrationsConfig,
};

module.exports = {
    ...knexConfig
}