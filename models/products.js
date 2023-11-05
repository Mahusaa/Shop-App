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
        const insertQuery = {
            text: "INSERT INTO products (title, price, description, \"imageURL\") VALUES ($1, $2, $3, $4)",
            values: [this.title, this.price, this.description, this.imageURL],
        };
        const handleQueryResults = (error) => {
            if(error){
                console.error("Error saving data: ", error);
            } else {
                console.log("Product data saved");
                cb();
            }
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

    static findById(id, cb) {
        const findIdQuery = {
            text: "SELECT * FROM products WHERE id = $1",
            values: [id],
        };
        const handleQueryResults = (error, result) => {
            if(error){
                console.error("Searching error: ", error);
                cb(error, null);
            } else {
                console.log(result.rows[0]);
                cb(result.rows[0]);
            }
        }
        db.query(findIdQuery, handleQueryResults);
    }
    static deleteById(){
};
}
