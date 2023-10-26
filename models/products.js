const path = require("path");
const fs = require("fs");
const Cart = require("./cart")

// Define the path to the JSON file where product data is stored
const p = path.join(
    path.dirname(process.mainModule.filename),
    "data",
    "products.json"
);

// Function to read products from the file and pass them to a callback.
const getProductsFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            return cb([]); // If there's an error reading the file, pass an empty array to the callback.
        } else {
            cb(JSON.parse(fileContent)); // Parse the file content (assumed to be JSON) and pass it to the callback.
        }
    });
};

// Export a class named Product
module.exports = class Product {
    constructor(id, title, imageURL, price, description) {
        this.id = id;
        this.title = title;
        this.imageURL = imageURL;
        this.price = price;
        this.description = description;
    }

    // Method to save a product to the JSON file
    save(cb) {
        getProductsFromFile(products => {
            if (this.id) {
                // If the product has an ID, update the existing product
                const existingProductIndex = products.findIndex(prod => prod.id === this.id);
                const updatedProducts = [...products];
                updatedProducts[existingProductIndex] = this;
                fs.writeFile(p, JSON.stringify(updatedProducts), err => {
                    if (err) {
                        console.log(err);
                    }
                    if (cb) {
                        cb();
                    }
                });
            } else {
                // If the product does not have an ID, generate one and add it as a new product
                this.id = Math.random().toString();
                products.push(this);
                fs.writeFile(p, JSON.stringify(products), err => {
                    if (err) {
                        console.log(err);
                    }
                    if (cb) {
                        cb();
                    }
                });
            }
        });
    }

    // Method to fetch all products and pass them to a callback
    static fetchAll(cb) {
        getProductsFromFile(cb);
    }

    // Method to find a product by its ID and pass it to a callback
    static findById(id, cb) {
        getProductsFromFile(products => {
            const product = products.find(product => product.id === id);
            cb(product);
        });
    }
    // Method to delete product by an ID using post request
    static deleteById(id, cb){
        getProductsFromFile(products => {
            const product = products.find(prod => prod.id === id);
            const updatedProducts = products.filter(prod => prod.id !== id);
            fs.writeFile(p, JSON.stringify(updatedProducts), err => {
                if(err){
                console.log(err);
                }
                if(cb){
                    Cart.deleteProduct(id, product.price, () => {
                        cb();
                    });
                }
            })
        })
    }
};

