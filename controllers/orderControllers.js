const { Op, ordersModel } = require('../models');
const asyncWrapper = require('../middlewares/asyncWrapper');
const { createError } = require('../errors/customError');
const { StatusCodes } = require('http-status-codes');
const { where } = require('sequelize');


let order = asyncWrapper(async (req, res, next) => {
    let { userEmail, productId } = req.body;
    if (!userEmail || !productId) {
        throw createError(StatusCodes.BAD_REQUEST, 'Fill All Entries');
    }
    let status = "Not Placed";
    let order = await ordersModel.create({ status ,userEmail, productId });
    res.status(StatusCodes.CREATED).json(order);
});

const orderDetails = asyncWrapper(async (req, res, next) => {
    let { status, userEmail } = req.query;

    let order = await ordersModel.findAll({
        where: {
            status: status || { [Op.ne]: null },
            userEmail: { [Op.like]: `%${userEmail}%` } || { [Op.ne]: null }
        },
    });
    res.status(StatusCodes.OK).json({ length: order.length, order });
});

let orderHistory = asyncWrapper(async (req, res, next) => {
    let { userEmail } = req.query;

    let order = await ordersModel.findAll({
        where: {
            userEmail: { [Op.like]: `%${userEmail}%` } || { [Op.ne]: null }
        },
    });
    res.status(StatusCodes.OK).json({ length: order.length, order });
});

module.exports = { order, orderHistory, orderDetails };