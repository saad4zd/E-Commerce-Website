const { Op, product } = require('../models');
const asyncWrapper = require('../middlewares/asyncWrapper');
const { createError } = require('../errors/customError');
const { StatusCodes } = require('http-status-codes');
const { where } = require('sequelize');

const viewProducts = asyncWrapper(async (req, res, next) => {
    let { page, brand, price, sort, sorder, search } = req.query;
    if (!page) {
        return next(createError(StatusCodes.BAD_REQUEST, 'url is not correct'));
    }
    if (price) {
        priceRange = price.split(',');
    }
    if (sort) {
        sortFilter = sort.split(',');

    }
    let products = await product.findAll({
        where: {
            brand: brand || { [Op.ne]: null },
            price: price ? { [Op.gte]: Number(priceRange[0]), [Op.lte]: Number(priceRange[1]) } : { [Op.ne]: null },
            name: search ? { [Op.like]: `%${search}%` } : { [Op.ne]: null }
        },
        order: sort ? sortFilter.map((attri) => [attri, sorder]) : null,
        limit: 5, offset: (Number(page) - 1) * 5
    });
    res.status(200).json({ length: products.length, products });
});

const getSingleProduct = asyncWrapper(async (req, res, next) => {
    let product = await product.findAll({ where: { id: Number(req.params.id) } });
    res.status(StatusCodes.CREATED).json(product);
});

const addProducts = asyncWrapper(async (req, res, next) => {
    let { name, brand, price, description, quantity, imageurl } = req.body;

    if (!name || !brand | !price || !description || !quantity || !imageurl) {
        throw createError(StatusCodes.BAD_REQUEST, 'Fill All The Entries');
    }

    let product = await product.create({ name, brand, price, description, quantity, imageurl });
    res.status(StatusCodes.CREATED).json(product);
});

const updateProducts = asyncWrapper(async (req, res, next) => {
    let { name, brand, price, description, quantity, imageurl } = req.body;

    if (!name || !brand | !price || !description || !quantity || !imageurl) {
        throw createError(StatusCodes.BAD_REQUEST, 'Fill All The Entries');
    }

    let product = await product.update(
        { name, brand, price, description, quantity, imageurl },
        { where: { name: req.name } });
    res.status(StatusCodes.OK).json(product);
});

const removeProducts = asyncWrapper(async (req, res, next) => {
    let product = await product.destroy({ where: { id: Number(req.params.id) } });
    res.status(StatusCodes.OK).json(product);
});

module.exports = { viewProducts, addProducts, updateProducts, removeProducts, getSingleProduct };