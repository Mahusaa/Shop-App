const db = require("../util/database");


module.exports = class Product {
    constructor(id, title, imageURL, price, description) {
        this.id = id;
        this.title = title;
        this.imageURL = imageURL;
        this.price = price;
        this.description = description;
    }

    save(cb) {
        db.query("INSERT INTO products (title, price, description, \"imageURL\") VALUES ($1, $2, $3, $4)", [this.title, this.price, this.description, this.imageURL], err => {
            if (err) {
            console.error("Error saving data: ", err);
            } else {
            console.log("Product successfully saved");
            cb();
            }
        });
        }


    static fetchAll(cb) {
        db.query('SELECT * FROM products', (error, results) => {
            if (error) {
                console.error('Error fetching products:', error);
            } else {
                cb(results.rows)
            }
});
    }

    static findById() {
    }
    static deleteById(){
};
}
