const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// Import route handlers
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorControllers = require("./controllers/error");
const db = require("./util/database"); 

// Set the view engine to EJS and define the views directory
app.set('view engine', 'ejs');
app.set('views', 'views');


// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));




// Define routes for '/admin' using 'adminData' router from admin.js with destructuring object and other routes using 'shopRoutes'
app.use('/admin', adminRoutes);
app.use(shopRoutes);



// Handle 404 (Not Found) errors and render a custom view
app.use(errorControllers.get404);


app.listen(3000);

