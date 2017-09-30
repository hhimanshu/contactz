import {Router} from 'express';

var models = require('../db/models'); // loads index.js

const routes = Router();

routes.get('/', (req, res) => {
    res.send('Hello World!');
});

routes.get('/users', (req, res) => {
    models.User.findAll().then(users => {
        res.send(JSON.stringify(users));
    });
});

routes.get('/contacts', (req, res) => {
    models.Contact.findAll().then(contacts => {
        res.send(JSON.stringify(contacts));
    });
});


export default routes;