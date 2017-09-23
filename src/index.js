import app from './app';
import {Sequelize} from "sequelize";

const { PORT = 8080 } = process.env;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`)); // eslint-disable-line no-console

// todo: externalize (user, password, host, database)
const sequelize = new Sequelize('postgres://postgres:contactdb@localhost:5432/contacts');

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.'); // eslint-disable-line no-console
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err); // eslint-disable-line no-console
    });