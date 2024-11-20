const { connect } = require('http2');
const mongoose = require('mongoose');

const connectDB = () => {
  mongoose
    .connect(process.env.URI)
    .then(() => console.log('Connected to Mongoose'))
    .catch((err) => console.log('Error connecting to mongoose', err));
};

module.exports = connectDB;
