"use strict";
module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
        classMethods: {
            associate: function (models) {
                // associations can be defined here
            }
        }
    });

    Users.associate = function (models) {
        Users.hasMany(models.Contacts);
    };
    return Users;
};