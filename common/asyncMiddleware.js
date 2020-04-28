/* eslint-disable no-undef */
/* eslint-disable no-multi-assign */
module.exports = asyncMiddleware = handler => {
  return async (req, res, next) => {
    try {
      await handler(req, res);
    } catch (err) {
      next(err);
    }
  };
};
