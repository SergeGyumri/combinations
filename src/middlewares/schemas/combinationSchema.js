import Joi from 'joi';

export default {
  generate: {
    body: Joi.object({
      length: Joi.number().required(),
      items: Joi.array().items(Joi.number().required()),
    }),
  },
};
