const path = require('path');

const express = require('express');

const shopControllers = require("../controllers/shop")

const router = express.Router();


// get "/" page with the controller
router.get('/', shopControllers.getProducts);

router.get("/products");

router.get("/cart");

router.get("/checkout");


module.exports = router;
