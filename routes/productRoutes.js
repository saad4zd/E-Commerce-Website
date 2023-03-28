const express = require("express");
const router = express.Router();


const { viewProducts, getSingleProduct, addProducts, updateProducts, removeProducts } = require("../controllers/productControllers");

router.route("/products").get(viewProducts);
router.route("/Product:id").get(getSingleProduct).post(addProducts).patch(updateProducts).delete(removeProducts);

module.exports = router;