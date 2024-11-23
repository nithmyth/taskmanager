const mongoose = require('mongoose');
const fetchSecret = require('../secrets/fetchSecret');
const { URI } = require('../config');

const connectDB = async () => {
  const uri = await fetchSecret(URI);
  console.log(uri);
  mongoose
    .connect(uri)
    .then(() => console.log('Connected to Mongoose'))
    .catch((err) => console.log('Error connecting to mongoose', err));
};

module.exports = connectDB;
