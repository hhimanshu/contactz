module.exports = {

    development: {
        username: "postgres",
        password: "contactdb",
        database: "contacts",
        host: "127.0.0.1",
        dialect: "postgres",
        seederStorage: "sequelize",
        seederStorageTableName: "SequelizeData"
    },
    production: {
        use_env_variable: "DATABASE_URL",
        seederStorage: "sequelize",
        seederStorageTableName: "SequelizeData"
    }
};