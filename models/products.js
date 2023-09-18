const path = require("path");
const fs = require("fs");

// Define a class called Product
module.exports = class Product {
  constructor(title) {
    this.title = title;
  }
  // Method to save the product instance to a JSON file
  save() {
    // Construct the file path to "products.json" using the 'path' module
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "products.json"
    );
    // Read the content of the JSON file asynchronously
    fs.readFile(p, (err, fileContent) => {
      let products = [];

      // Check if there was no error reading the file
      if (!err) {
        
        // Parse the file content into an array if it exists
        products = JSON.parse(fileContent);
      }

      // Push the current product instance into the 'products' array
      products.push(this);

      // Write the updated 'products' array back to the JSON file
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err); // Log any error that occurred during writing
      });
    });
  }

  // Static method to fetch all products from the JSON file and invoke a callback
  static fetchAll(cb) {
    // Construct the file path to "products.json" using the 'path' module
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "products.json"
    );

    // Read the content of the JSON file asynchronously
    fs.readFile(p, (err, fileContent) => {
      if (err) {
    // If there is an error reading the file, call the callback with an empty array
        return cb([]);
      }
      // If there is no error, parse the file content into JSON and call the callback with the parsed data
      cb(JSON.parse(fileContent));
    });
  }
};
