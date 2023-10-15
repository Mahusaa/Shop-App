const Product =  require("../models/products");
const Cart = require("../models/cart");

//Handle get to render product-list.ejs in shop
exports.getProducts =  (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/products-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products',
    });
  })
}

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
    });
  })
}

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    pageTitle: 'Your cart',
    path: '/cart',
  })
}

exports.getCheckout = (req, res, next) => {
res.render('shop/checkout', {
    pageTitle: 'Your checkout',
    path: '/checkout',
  })
}

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
      pageTitle: "Orders",
      path: '/orders',
    })
  }

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    res.render("shop/product-details", {
      product: product, 
      pageTitle: product.title,
      path: "/products",
    })
  })
}

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.addProduct(prodId, product.price)
  })
  res.redirect("/cart");
}











