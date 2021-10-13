const Joi = require("joi");

// Income types validation
const incomeTypeValidation = (incomeType) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    symbol: Joi.string().min(3).max(30).required(),
  });
  return schema.validate(incomeType);
};

module.exports.incomTypeValidation = incomeTypeValidation;
