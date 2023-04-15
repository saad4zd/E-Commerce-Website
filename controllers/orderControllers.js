const { Op, ordersModel } = require('../models');
const asyncWrapper = require('../middlewares/asyncWrapper');
const { createError } = require('../errors/customError');
const { StatusCodes } = require('http-status-codes');
const { where } = require('sequelize');


let order = asyncWrapper(async (req, res, next) => {
    let {userEmail, productId} = req.query;
    if (!userEmail||!productId) {
        throw createError(StatusCodes.BAD_REQUEST, 'Fill All Entries');
    }

    let order = await ordersModel.create({ userEmail, productId });
    res.status(StatusCodes.CREATED).json(order);
});

const orderDetails = asyncWrapper(async (req, res, next) => {
    let { createdAt, userEmail } = req.query;
   
    let order = await ordersModel.findAll({
        where: {
            createdAt: createdAt || { [Op.ne]: null },
            userEmail: { [Op.like]: `%${userEmail}%` } || { [Op.ne]: null }
        },
    });
    res.status(200).json({ length: order.length, order });
});

let orderHistory = asyncWrapper(async (req, res, next) => {
    let { createdAt, userEmail } = req.query;
   
    let order = await ordersModel.findAll({
        where: {
            createdAt: createdAt || { [Op.ne]: null },
            userEmail: { [Op.like]: `%${userEmail}%` } || { [Op.ne]: null }
        },
    });
    res.status(200).json({ length: order.length, order });
});

module.exports = { order, orderHistory, orderDetails };