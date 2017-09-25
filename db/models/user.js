"use strict";
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
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

    User.associate = function (models) {
        User.hasMany(models.Contact);
    };
    return User;
};