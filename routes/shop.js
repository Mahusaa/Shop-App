const path = require('path');

const express = require('express');

const shopControllers = require("../controllers/shop")

const router = express.Router();


// get "/" page with the controller
router.get('/', shopControllers.getIndex);
router.get("/products", shopControllers.getProducts);
router.get("/products/:productId", shopControllers.getProduct);
router.get("/cart", shopControllers.getCart);
router.get("/checkout", shopControllers.getCheckout);
router.get("/orders", shopControllers.getOrders);


module.exports = router;
