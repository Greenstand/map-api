const Joi = require('joi');

const configPostSchema = Joi.object({
  name: Joi.string().required(),
  data: Joi.object().required(),
  ref_id: Joi.string(),
  ref_uuid: Joi.string().uuid(),
});

module.exports = { configPostSchema };
