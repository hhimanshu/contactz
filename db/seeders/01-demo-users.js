"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("Users", [{
            id: 1,
            firstName: "john",
            lastName: "Doe",
            email: "john.doe@gmail.com",
            password: "john",
            createdAt: Sequelize.fn("NOW"),
            updatedAt: Sequelize.fn("NOW")
        }, {
            id: 2,
            firstName: "katy",
            lastName: "perry",
            email: "katy.perry@gmail.com",
            password: "katy",
            createdAt: Sequelize.fn("NOW"),
            updatedAt: Sequelize.fn("NOW")
        }], {})
    },

    down: (queryInterface, Sequelize) => {
        queryInterface.bulkDelete("Users", null, {});
    }
};
