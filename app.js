const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Set the view engine to EJS and define the views directory
app.set('view engine', 'ejs');
app.set('views', 'views');

// Import route handlers
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes for '/admin' using 'adminData' router from admin.js with destructuring object and other routes using 'shopRoutes'
app.use('/admin', adminData.routes);
app.use(shopRoutes);

// Handle 404 (Not Found) errors and render a custom view
app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

// Start the Express app and listen on port 3000
app.listen(3000);

