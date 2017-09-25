"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("Contacts", [{
            firstName: "first-001",
            lastName: "last-001",
            email: "first.last.001@gmail.com",
            phone: "2538750234",
            UserId: 1,
            createdAt: Sequelize.fn("NOW"),
            updatedAt: Sequelize.fn("NOW")
        }, {
            firstName: "first-002",
            lastName: "last-002",
            email: "first.last.002@gmail.com",
            phone: "2538750134",
            UserId: 1,
            createdAt: Sequelize.fn("NOW"),
            updatedAt: Sequelize.fn("NOW")
        },{
            firstName: "first-003",
            lastName: "last-003",
            email: "first.last.003@gmail.com",
            phone: "2238750134",
            UserId: 2,
            createdAt: Sequelize.fn("NOW"),
            updatedAt: Sequelize.fn("NOW")
        }], {})
    },

    down: (queryInterface, Sequelize) => {
        queryInterface.bulkDelete("Contacts", null, {});
    }
};
