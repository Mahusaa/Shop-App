const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// Import route handlers
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorControllers = require("./controllers/error");
const sequelize = require('./util/database');
const Product = require('./models/products');
const User = require('./models/user');

// Set the view engine to EJS and define the views directory
app.set('view engine', 'ejs');
app.set('views', 'views');


// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
	User.findByPk(1)
		.then(user => {
			req.user = user;
			next();
	})
	.catch(err => console.log(err))
})


// Define routes for '/admin' using 'adminData' router from admin.js with destructuring object and other routes using 'shopRoutes'
app.use('/admin', adminRoutes);
app.use(shopRoutes);



// Handle 404 (Not Found) errors and render a custom view
app.use(errorControllers.get404);

Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'});
User.hasMany(Product);


sequelize
	.sync()
	.then(() => {
		return User.findByPk(1);
	})
	.then(user => {
		if(!user){
			return User.create({name: "Usamah", email: "test@test.com"})
		}
		return user;
	})
	.then((user) => {
		console.log(user);
		console.log("Successfully connected to a db");
		app.listen(3000);
}).catch(err => {
	console.log(err);
})


