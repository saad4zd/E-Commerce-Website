const { Op, feedback } = require('../models');
const asyncWrapper = require('../middlewares/asyncWrapper');
const { createError } = require('../errors/customError');
const { StatusCodes } = require('http-status-codes');
const { where } = require('sequelize');


let createFeedback = asyncWrapper(async (req, res, next) => {
    let {feedback, userEmail, productId} = req.query;
    if (!feedback ||!userEmail||!productId) {
        throw createError(StatusCodes.BAD_REQUEST, 'Fill All Entries');
    }

    let Feedback = await feedback.create({ feedback, userEmail, productId });
    res.status(StatusCodes.CREATED).json(Feedback);
});

let getFeedback = asyncWrapper(async (req, res, next) => {
    if(!req.params.id){
        throw createError(StatusCodes.BAD_REQUEST, 'No ID Found');
    }

    let Feedback = await feedback.findAll({ where: { id: Number(req.params.id) } });
    res.status(StatusCodes.OK).json(Feedback);
});

const viewFeedbacks = asyncWrapper(async (req, res, next) => {
    let { page, productId, userEmail } = req.query;

    if (!page) {
        return next(createError(StatusCodes.BAD_REQUEST, 'url is not correct'));
    }
   
    let feedbacks = await feedback.findAll({
        where: {
            productId: productId || { [Op.ne]: null },
            userEmail: userEmail ? { [Op.like]: `%${userEmail}%` } : { [Op.ne]: null }
        },
        limit: 5, offset: (Number(page) - 1) * 5
    });
    res.status(200).json({ length: feedbacks.length, feedbacks });
});

module.exports = { createFeedback, getFeedback, viewFeedbacks };