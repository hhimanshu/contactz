module.exports = {
    development: {
        username: "postgres",
        password: "contactdb",
        database: "contacts",
        dialect: "sqlite",
        storage: "./db.development.sqlite",
        seederStorage: "sequelize",
        seederStorageTableName: "SequelizeData"
    },
    production: {
        use_env_variable: "DATABASE_URL",
        dialect: "postgres",
        seederStorage: "sequelize",
        seederStorageTableName: "SequelizeData"
    }
};