const path = require('path');

const express = require('express');

const productControllers = require("../controllers/products")

const router = express.Router();


// get "/" page with the controller
router.get('/', productControllers.getProducts);

router.get("/products");

router.get("/cart");

router.get("/checkout");


module.exports = router;
