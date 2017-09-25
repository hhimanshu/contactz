"use strict";
import Users from "users";

module.exports = (sequelize, DataTypes) => {
    const Contacts = sequelize.define("Contacts", {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        userId: DataTypes.INTEGER
    }, {
        classMethods: {
            associate: function (models) {
                // associations can be defined here
            }
        }
    });

    Users.hasMany(Contacts, {as: "contacts"});

    return Contacts;
};
