const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
});

db.connect((err) => {
  if (err) throw err.message;
  console.log("Connected to MySQL Server!");
});

module.exports = db;
