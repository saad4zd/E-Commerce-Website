const express = require("express");
const router = express.Router();

const { orderDetails, createOrder, orderHistory } = require("../controllers/orderControllers");

router.route('/').post(createOrder);
router.route('/:id').get(orderDetails);
router.route("/orderHistory/:userEmail").get(orderHistory);

module.exports = router;