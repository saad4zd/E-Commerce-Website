const express = require("express");
const router = express.Router();

const { getFeedback, createFeedback } = require("../controllers/feedbackControllers");

router.route("/feedback").get(getFeedback).post(createFeedback);

module.exports = router;