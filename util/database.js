const { Pool } = require('pg');

// Create a PostgreSQL connection pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5432,
  max: 20, // The maximum number of clients in the pool
});

// Export the pool for use in your application
module.exports = pool;











