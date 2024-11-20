const wrapper = (fn) => {
  //same as line 4 in controller
  return async (req, res, next) => {
    try {
      return await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

module.exports = wrapper;
