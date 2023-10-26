const path = require('path');

const express = require('express');

const shopControllers = require("../controllers/shop")

const router = express.Router();


// get and post url with the controller
router.get('/', shopControllers.getIndex);
router.get("/products", shopControllers.getProducts);
router.get("/products/:productId", shopControllers.getProduct);
router.post("/cart", shopControllers.postCart);
router.get("/cart", shopControllers.getCart);
router.get("/checkout", shopControllers.getCheckout);
router.get("/orders", shopControllers.getOrders);
router.post("/cart-delete-item", shopControllers.postCartDelete);


module.exports = router;
