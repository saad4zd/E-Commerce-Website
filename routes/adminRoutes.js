const express = require("express");
const router = express.Router();

const { login, dashboard, addAdmin } = require("../controllers/adminControllers");

router.route("/login").post(login);
router.route("/dashboard").get(dashboard);
router.route("/addAdmin").post(addAdmin);

module.exports = router;