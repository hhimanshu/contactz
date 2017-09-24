'use strict';
var Sequelize = require('sequelize');

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [{
            firstName: "john",
            lastName: "Doe",
            email: "john.doe@gmail.com",
            password: "john",
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW')
        }], {})
    },

    down: (queryInterface, Sequelize) => {
        queryInterface.bulkDelete('Users', null, {});
    }
};
