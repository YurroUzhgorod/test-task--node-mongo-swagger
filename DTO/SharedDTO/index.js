const Joi = require("joi");

const { ObjectId } = require("mongodb");

// Check ObjectId and convert to ObjectId
const objectId = Joi.alternatives(Joi.object(), Joi.string()).custom(
  (value, helpers) => {
    if (!ObjectId.isValid(value)) {
      return helpers.message({ custom: "Invalid ObjectID format" });
    }

    return new ObjectId(value);
  }
);

module.exports = {
  objectId,
};
