const Product =  require("../models/products")

exports.getAddProducts = (req, res, next) => {
  // Handle GET requests to '/admin/add-product' route
  res.render("admin/add-product", {
    //pageTitle and path we output it in head.ejs and navigation.ejs
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,activeAddProduct: true,
  });
}

// Handle POST requests to '/admin/add-product' route
exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageURL = req.body.imageURL;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imageURL, price, description);
  product.save(() => {
    res.redirect("/products");
  })
  
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products',
      });
    })
  }
