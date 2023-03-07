const express = require("express");
const router = express.Router();

const { login, dashboard, addAdmin, orderDetails, userDetails, feedback } = require("../controllers/adminControllers");
const { viewProducts, addProducts, updateProducts, removeProducts } = require("../controllers/adminControllers");


router.route("/").get();
router.route("/login").post(login);
router.route("/dashboard").get(dashboard);
router.route("/products").get(viewProducts);
router.route("/Product:id").post(addProducts).patch(updateProducts).delete(removeProducts);
router.route("/addAdmin").post(addAdmin);
router.route("/orderDetails").get(orderDetails);
router.route("/userDetails").get(userDetails);
router.route("/feedback").get(feedback);

module.exports = router;