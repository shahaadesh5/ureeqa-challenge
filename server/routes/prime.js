const express = require("express");

const primeController = require("../controllers/prime.controller");

const router = express.Router();

router.post("/", primeController.getMedianPrimes);

module.exports = router;
