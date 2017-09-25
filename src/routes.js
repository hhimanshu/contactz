import {Router} from 'express';

var models = require('../db/models'); // loads index.js

const routes = Router();

routes.get('/', (req, res) => {
    res.send('Hello World!');
});

routes.get('/users', (req, res) => {
    models.Users.findAll().then(users => {
        console.log(users)
    });

    res.send('ok!');
});

routes.get('/contacts', (req, res) => {
    models.Contacts.findAll().then(contacts => {
        console.log(contacts);
    });

    res.send('ok!');
});


export default routes;