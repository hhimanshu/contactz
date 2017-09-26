console.log("Node Env Value:", process.env);
let productionCredentials = {
    username: undefined,
    password: undefined,
    database: undefined,
    host: undefined
};

if (process.env.DATABASE_URL) {
    const match = process.env.DATABASE_URL.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/);
    productionCredentials.username = match[1];
    productionCredentials.password = match[2];
    productionCredentials.host = match[3];
    productionCredentials.database = match[5];
}


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
        username: productionCredentials.username,
        password: productionCredentials.password,
        database: productionCredentials.database,
        host: productionCredentials.host,
        dialect: 'postgres',
        dialectOptions: {
            ssl: true
        },
        seederStorage: "sequelize",
        seederStorageTableName: "SequelizeData"
    }
};