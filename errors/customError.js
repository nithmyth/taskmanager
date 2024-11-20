class CustomAPIError extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
  }
}

const customError = (code, message) => {
  return new CustomAPIError(code, message);
};

module.exports = { customError, CustomAPIError };
