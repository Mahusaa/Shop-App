const path = require('path');
const express = require('express');

const rootDir = require('../util/path'); // Assuming this imports a utility for getting the root directory path

const router = express.Router(); // Create an Express Router instance

const products = []; // Initialize an empty array to store products

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  // Handle GET requests to '/admin/add-product' route
  res.render('add-product', {
    //pageTitle and path we output it in head.ejs and navigation.ejs
    pageTitle: 'Add Product', 
    path: '/admin/add-product', 
    formsCSS: true, // A flag to indicate whether to include forms-related CSS (not shown in this code)
    productCSS: true, // A flag to indicate whether to include product-related CSS (not shown in this code)
    activeAddProduct: true // A flag to indicate that the "Add Product" link in the navigation is active (not shown in this code)
  });
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  // Handle POST requests to '/admin/add-product' route
  products.push({ title: req.body.title }); // Add a new product to the products array based on the title received in the request body
  res.redirect('/'); // Redirect to the root path ('/') after adding the product
});

// Export the router and the products array so that they can be used in other parts of the application
exports.routes = router;
exports.products = products;
