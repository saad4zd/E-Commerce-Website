const { Sequelize, DataTypes, Model } = require('sequelize');

let ordersModel = (Sequelize) => {
    class Orders extends Model { };
    Orders.init({
        order_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        date: {
            type: DataTypes.DATEONLY,
            validate: {
                notNull: true,
                isDate: true
            }
        }
    }, {
        sequelize,
        modelName: 'orders',
        timestamps: false
    });
    return Orders;
};

module.exports = ordersModel;