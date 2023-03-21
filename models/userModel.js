const { Sequelize, DataTypes, Model } = require('sequelize');

let userModel = (sequelize) => {
    class User extends Model { };
    User.init({
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'user'
    });
    return User;
};

module.exports = userModel;