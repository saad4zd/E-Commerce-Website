const express = require("express");
const router = express.Router();

const { login, dashboard, addAdmin, viewAdmins } = require("../controllers/adminControllers");
let authentication = require('../middlewares/authentication');

router.route('/viewadmins').get(authentication, viewAdmins);
router.route("/login").post(login);
router.route("/dashboard").get(authentication, dashboard);
router.route("/addAdmin").post(authentication, addAdmin);

module.exports = router;