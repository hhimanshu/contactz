import {Router} from 'express';

var models = require('../db/models'); // loads index.js

const routes = Router();

routes.get('/', (req, res) => {
    res.send('Hello World!');
});

routes.get('/users', (req, res) => {
    models.User.findAll().then(users => {
        res.json(users);
    });
});

routes.get('/contacts', (req, res) => {
    models.Contact.findAll().then(contacts => {
        res.json(contacts);
    });
});


export default routes;