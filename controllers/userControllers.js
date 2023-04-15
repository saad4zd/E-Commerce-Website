const { Op, user } = require('../models');
const asyncWrapper = require('../middlewares/asyncWrapper');
const { StatusCodes } = require('http-status-codes');

let login = asyncWrapper(async (req, res, next) => {
    let data = await user.findOne({ where: { email: req.body.email } });
    let token = data.token();
    res.status(StatusCodes.OK).json({ data, token });
});

let signUp = asyncWrapper(async (req, res, next) => {
    let data = await user.create(req.body);
    res.status(StatusCodes.CREATED).json(data);
});

let getAllUsers = asyncWrapper(async (req, res, next) => {
    let users = await user.findAll();
    res.status(StatusCodes.OK).json(users);
});

let getSingleUser = asyncWrapper(async (req, res, next) => {
    let usr = await user.findOne({ where: { email: req.params.email } });
    res.status(StatusCodes.OK).json(usr);
});

module.exports = { getAllUsers, getSingleUser, login, signUp };