const { DataTypes, Model } = require('sequelize');

let userModel = (sequelize) => {
    class User extends Model { };
    User.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min: 5,
                max: 25
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            validate: {
                regex: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                max: 100
            }
        },
        contact: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            validate: {
                isNumeric: true
            }
        }
    }, {
        sequelize,
        modelName: 'user',
        timestamps: false
    });
    return User;
};

module.exports = userModel;