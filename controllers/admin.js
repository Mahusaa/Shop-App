const Product =  require("../models/products")

exports.getAddProducts = (req, res, next) => {
  // Handle GET requests to '/admin/edit-product' route
  res.render("admin/edit-product", {
    //pageTitle and path we output it in head.ejs and navigation.ejs
    pageTitle: "Add Product",
    path: "/admin/add-product",
    editing: false,
  });
}

// Handle POST requests to '/admin/add-product' route
exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageURL = req.body.imageURL;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(null, title, imageURL, price, description);
  product.save(() => {
    res.redirect("/products");
  })
  
};
exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedImage = req.body.imageURL;
  const updatedPrice = req.body.price;
  const updatedDescription = req.body.description;
  const updatedProduct = new Product(prodId, updatedTitle, updatedImage, updatedPrice, updatedDescription);
  updatedProduct.save(() => {
    res.redirect("/products");
  })
}

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.deleteById(prodId, () => {
    res.redirect("/admin/products");
  });
}

exports.getEditProducts = (req, res, next) => {
  const editMode = req.query.edit;
  if(!editMode){
    return res.redirect("/");
  }
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    if(!product){
      return res.redirect("/");
    }
    res.render("admin/edit-product", {
      pageTitle: "Edit Product",
      path: "/admin/edit-product",
      editing: editMode,
      product: product,
    })
  })

}

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products',
      });
    })
  }
