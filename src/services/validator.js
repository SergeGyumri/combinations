import HttpErrors from 'http-errors';
import _ from 'lodash';

function throwErrors(error) {
  const errors = {};
  error.details.forEach((err) => {
    const path = err.context.label.replace(/^body\./, '').replace(/^query\./, '').replace(/^params\./, '');
    if (!_.get(errors, path)) {
      _.set(errors, path, err.message.replace(/^".+?"\s/, 'Field '));
    }
  });
  throw new HttpErrors(422, { errors });
}

export const validateMiddleware = (rules, messages = {}) => (req, res, next) => {
  _.map(rules, (rule, key) => {
    const validation = rule.validate(req[key], {
      abortEarly: false,
      messages,
    });
    const { error, value } = validation;
    if (error) {
      throwErrors(error);
    } else {
      req[key] = value;
    }
  });
  return next();
};

export default validateMiddleware;
