const Joi = require("joi");
const { REGULAR_EXPRESSIONS } = require("../../constants/regularExpressions");
const { ERRORS } = require("../error.constant");

const { objectId } = require("../SharedDTO");

const createContentDTO = Joi.object().keys({
  title: Joi.string().required(),
  userId: objectId.required(),
  description: Joi.string().required(),
});

const getContentByIdDTO = Joi.object()
  .keys({
    userId: objectId.required(),
    id: objectId.required(),
  })
  .messages(ERRORS);

const getContentListDTO = Joi.object()
  .keys({
    skip: Joi.number().default(0).required(),
    limit: Joi.number().max(100).default(15).required(),
    userId: objectId.required(),
  })
  .messages(ERRORS);

const updateContentDTO = Joi.object()
  .keys({
    id: objectId.required(),
    title: Joi.string().required(),
    userId: objectId.required(),
    description: Joi.string().required(),
  })
  .messages(ERRORS);

const watchContentDTO = Joi.object().keys({
  contentId: Joi.string()
    .regex(REGULAR_EXPRESSIONS.OBJECT_ID)
    .message(`Invalid content identifier has been provided.`)
    .required(),
  userId: objectId.required(),
  isPreview: Joi.boolean().default(false),
});

const deleteContentDTO = Joi.object()
  .keys({
    id: objectId.required(),
    userId: objectId.required(),
  })
  .messages(ERRORS);

const getAllPassedTestOfUserDTO = Joi.object().keys({
  idUser: objectId.required(),
  sort: Joi.string(),
  skip: Joi.number().default(0).required(),
  userId: objectId.required(),
  limit: Joi.number().max(100).default(15).required(),
});

const assignContentToUserDTO = Joi.object()
  .keys({
    contentId: objectId.required(),
    idUser: objectId.required(),
    userId: objectId.required(),
  })
  .messages(ERRORS);

module.exports = {
  createContentDTO,
  getContentByIdDTO,
  getContentListDTO,
  updateContentDTO,
  deleteContentDTO,
  watchContentDTO,
  getAllPassedTestOfUserDTO,
  assignContentToUserDTO,
};
