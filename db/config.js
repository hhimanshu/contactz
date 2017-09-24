module.exports = {
    development: {
        username: 'postgres',
        password: 'contactdb',
        database: 'contacts',
        host: '127.0.0.1',
        dialect: 'postgres',
        seederStorage: "sequelize",
        seederStorageTableName: "SequelizeData"
    },
    production: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOSTNAME,
        dialect: 'postgres',
        seederStorage: "sequelize",
        seederStorageTableName: "SequelizeData"
    }
};