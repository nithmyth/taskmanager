const db = require('./mysql_connect');

//mysql2 with promise already called
const executeQuery = async (query, ...values) => {
  const [res] = await db.execute(query, values);
  return res;
};

//mysql when you don't call .promise() in .connect
// const executeQuery = (query) => {
//   return new Promise((res, rej) => {
//     db.query(query, (error, results, fields) => {
//       if (error) throw rej(error);
//       res(results);
//     });
//   });
// };

executeQuery('SELECT * FROM album where album_id = ?', 2).then(console.log);

module.exports = executeQuery;
