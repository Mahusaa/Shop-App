const Product =  require("../models/products")

exports.getAddProducts = (req, res, next) => {
  // Handle GET requests to '/admin/add-product' route
  res.render("add-product", {
    //pageTitle and path we output it in head.ejs and navigation.ejs
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
}

// Handle POST requests to '/admin/add-product' route
exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save()
  res.redirect("/");
};

//Handle get to trender shop.js
exports.getProducts =  (req, res, next) => {
  const products = Product.fetchAll(products => {
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  })
}
