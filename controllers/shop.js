const { reset } = require("nodemon");
const Product =  require("../models/products")

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
    console.log(product);
  })
  res.redirect("/");
}
