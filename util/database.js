require("dotenv").config();
const {Sequelize} = require('sequelize');



const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  database: process.env.DB_NAME,
  username: "postgres",
  password: process.env.DB_PASS,
  port: 5432,
  pool: {
    max: 20,
  }
})



module.exports = sequelize;










