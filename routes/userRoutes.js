const express = require('express');
const router = express.Router();
let { home, login, signUp, getProductAll, getSingleProduct, deleteProduct, cart, order, orderHistory, feedback } = require('../controllers/userControllers');

router.route('/').get(home);
router.route('/login').post(login);
router.route('/signUp').post(signUp);
router.route('/product').get(getProductAll);
router.route('/product:id').get(getSingleProduct).delete(deleteProduct);
router.route('/cart').get(cart);
router.route('/order').post(order);
router.route('/orderHistory').get(orderHistory);
router.route('/feedback').post(feedback);


module.exports = router;