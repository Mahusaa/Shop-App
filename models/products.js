const db = require("../util/database");


module.exports = class Product {
    constructor(id, title, imageURL, price, description) {
        this.id = id;
        this.title = title;
        this.imageURL = imageURL;
        this.price = price;
        this.description = description;
    }

    save() {
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
