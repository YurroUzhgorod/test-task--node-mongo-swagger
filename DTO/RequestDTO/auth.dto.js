const Joi = require("joi");

const { ERRORS } = require("../error.constant");
const { REGULAR_EXPRESSIONS } = require("../../constants/regularExpressions");

const signUpHandlerDTO = Joi.object()
  .keys({
    email: Joi.string().regex(REGULAR_EXPRESSIONS.EMAIL_REGEXP).required(),
    password: Joi.string()
      .trim()
      .regex(REGULAR_EXPRESSIONS.PASSWORD)
      .required(),
    userName: Joi.string().trim().min(4).required(),
  })
  .messages(ERRORS);

const signInHandlerDTO = Joi.object()
  .keys({
    password: Joi.string().required(),
    email: Joi.string(),
    userName: Joi.string(),
  })
  .or("email", "userName")
  .messages(ERRORS);

module.exports = {
  signUpHandlerDTO,
  signInHandlerDTO,
};
