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
        const insertQuery = {
            text: "INSERT INTO products (title, price, description, \"imageURL\") VALUES ($1, $2, $3, $4)",
            values: [this.title, this.price, this.description, this.imageURL],
        };
        const handleQueryResults = (error) => {
            if(error){
                console.error("Error saving data: ", error);
            } else {
            console.log("Product successfully saved");
            cb();
                console.log("Product data saved");
                cb();
            }
        });
        };
        db.query(insertQuery, handleQueryResults);
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
