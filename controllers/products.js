const products = [];

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
};

exports.postAddProduct = (req, res, next) => {
  // Handle POST requests to '/admin/add-product' route
  products.push({ title: req.body.title });
  res.redirect("/");
};

exports.getProducts =  (req, res, next) => {
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
}
