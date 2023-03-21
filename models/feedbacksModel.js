const { Sequelize, DataTypes, Model } = require('sequelize');

let feedbacksModel = (Sequelize) => {
    class Feedbacks extends Model { };
    Feedbacks.init({
        feedback: {
            type: DataTypes.STRING,
            validate:{
                notNull:true,
                notEmpty: true,
                len: [10,60],              
            }
        }
    }, {
        sequelize,
        modelName: 'feedbacks',
        timestamps: false
    });
    return Orders;
};

module.exports = feedbacksModel;