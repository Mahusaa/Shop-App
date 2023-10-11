const path = require("path");
const fs = require("fs");


const p = path.join(
    path.dirname(process.mainModule.filename),
    "data",
    "products.json"
  );

// Function to read products from the file and pass them to a callback.
const getProductsFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if(err){
            return cb([]); // If there's an error reading the file, pass an empty array to the callback.
        } else {
            cb(JSON.parse(fileContent)); // Parse the file content (assumed to be JSON) and pass it to the callback.
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
    this.id = Math.random().toString();
    getProductsFromFile(products => {
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), (err) => console.log(err));
    })

  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
  static findById(id, cb){
        getProductsFromFile(products => {
            const product = products.find(product => product.id === id); 
            cb(product);
        })
    }
};
