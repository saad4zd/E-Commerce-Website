const express = require("express");
const router = express.Router();

const { cart } = require("../controllers/cartControllers");

router.route('/cart').get(cart);

module.exports = router;