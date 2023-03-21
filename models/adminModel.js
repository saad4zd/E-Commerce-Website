const { Sequelize, DataTypes, Model } = require('sequelize');

let adminModel = (sequelize) => {
    class Admin extends Model { };
    Admin.init({
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'admin',
        timestamps: false
    });
    return Admin;
};

module.exports = adminModel;