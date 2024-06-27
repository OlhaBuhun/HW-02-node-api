import Joi from "joi";

export const createContactSchema = Joi.object({
  name: Joi.string().required()
  .messages({
    'string.base': `"name" should be a type of 'text'`,
    'string.empty': `"name" cannot be an empty field`,
    'any.required': `"name" is a required field`
  }),
  email: Joi.string().required(),
  phone: Joi.string().required()
  .messages({
    'string.base': `"phone" should be a type of 'text'`,
    'string.empty': `"phone" cannot be an empty field`,
    'string.min': `"phone" should have a minimum length of ${12}`,
    'any.required': `"phone" is a required field`
  }),
})

export const updateContactSchema = Joi.object({

})