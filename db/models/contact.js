"use strict";
module.exports = (sequelize, DataTypes) => {
    const Contact = sequelize.define("Contact", {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
    }, {
        classMethods: {
            associate: function (models) {
                // associations can be defined here
            }
        }
    });

    Contact.associate = function (models) {
        // Using additional options like CASCADE etc for demonstration
        // Can also simply do Task.belongsTo(models.User);
        Contact.belongsTo(models.User, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Contact;
};
