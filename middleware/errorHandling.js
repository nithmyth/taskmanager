const { CustomAPIError } = require('../errors/customError');
const errorHandler = (error, req, res, next) => {
  if (error instanceof CustomAPIError) {
    return res.status(error.code).json({ error: error.message });
  }
  return res.status(500).json({ error });
};

module.exports = errorHandler;
