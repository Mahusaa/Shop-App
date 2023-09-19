const path = require('path');
const express = require('express');

const productControllers = require("../controllers/products")

const router = express.Router(); // Create an Express Router instance

// /admin/add-product => GET
router.get('/add-product', productControllers.getAddProducts);

//admin/products => GET
router.get("products")

// /admin/add-product => POST
router.post('/add-product', productControllers.postAddProduct);

module.exports = router
