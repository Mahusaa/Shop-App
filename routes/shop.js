const path = require('path');

const express = require('express');

const productControllers = require("../controllers/products")

const router = express.Router();



router.get('/', productControllers.getProducts);

module.exports = router;
