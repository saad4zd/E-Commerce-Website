const { Sequelize, DataTypes, Model } = require('sequelize');

let productsModel = (Sequelize) => {
    class Products extends Model { };
    Products.init({
        Product_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            validate:{
                notNull:true,
                notEmpty: true,            
            }
        },
        brand: {
            type: DataTypes.STRING,
            validate:{
                notNull:true,
                notEmpty: true,            
            }
        },
        price: {
            type: DataTypes.INTEGER,
            validate:{
                notNull:true,
                notEmpty: true,  
                isNumeric: true,
                min: 1,         
            }
        },
        description: {
            type: DataTypes.STRING,
            validate:{
                notNull:true,
                notEmpty: true,  
                len:[10,60],          
            }
        },
        quantity: {
            type: DataTypes.INTEGER,
            validate:{
                notNull:true,
                notEmpty: true,  
                isNumeric: true,
                min: 0,         
            }
        }
    }, {
        sequelize,
        modelName: 'products',
        timestamps: false
    });
    return Products;
};

module.exports = productsModel;