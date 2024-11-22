require('dotenv').config();
const mysql = require('mysql2');
const fetchSecret = require('../secrets/fetchSecret');
const props = require('../config');

const db = async () => {
  const host = await fetchSecret(props.MYSQL_HOST);
  const user = await fetchSecret(props.MYSQL_USER);
  const password = await fetchSecret(props.MYSQL_PWD);
  const database = await fetchSecret(props.MYSQL_DB);
  return mysql
    .createPool({
      connectionLimit: 10,
      host,
      user,
      password,
      database,
    })
    .promise();
};

// con.connect((err) => {
//   if (err) {
//     console.error('Error connecting to mysql - ', err);
//     return;
//   }
//   console.log('MySQL Connected');
// });

module.exports = db; //top-level await
