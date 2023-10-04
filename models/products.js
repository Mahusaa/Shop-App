const path = require("path");
const fs = require("fs");

const p = path.join(
    path.dirname(process.mainModule.filename),
    "data",
    "products.json"
  );

const getProductsFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if(err){
            return cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }

    })
}


module.exports = class Product {
  constructor(title, imageURL, price, description) {
    this.title = title
    this.imageURL = imageURL
    this.price = price
    this.description = description
  }

  save() {
    getProductsFromFile(products => {
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), (err) => console.log(err));
    })

  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
