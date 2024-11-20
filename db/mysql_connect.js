require('dotenv').config();
const mysql = require('mysql2');

const db = mysql
  .createPool({
    connectionLimit: 10,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PWD,
    database: process.env.MYSQL_DB,
  })
  .promise();

// con.connect((err) => {
//   if (err) {
//     console.error('Error connecting to mysql - ', err);
//     return;
//   }
//   console.log('MySQL Connected');
// });

module.exports = db;
