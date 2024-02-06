const mongoose = require("mongoose");

const { ObjectId } = mongoose.Types;

const models = require("../models");

class Provider {
  // CREATE ====================================================================

  constructor(modelName) {
    this._ = models[modelName];
  }

  async createSingle(document) {
    return this._.create(document);
  }

  // READ ======================================================================

  async getSingle(match, projection = {}, options = {}) {
    // @ts-ignore
    return this._.findOne(match, projection, options).lean();
  }

  async getSingleById(id, projection = {}, options = {}) {
    options.lean = true;

    // @ts-ignore
    return this._.findById(id, projection, options).lean();
  }

  async aggregation(pipeline = [], hint = null, options = {}) {
    const result = hint
      ? await this._.aggregate(pipeline).option(options)
      : await this._.aggregate(pipeline).option(options);

    return result;
  }

  async count(match = {}) {
    // @ts-ignore
    const result = await this._.countDocuments(match);

    return result;
  }

  // UPDATE ====================================================================

  /**
   * Update existing document by id
   * @param {ObjectId | String | object} id - id of document
   * @param {Object} update - update data or aggregation
   * @param {Object} [options={}] - query options
   * @returns {Promise<{n: Number, nModified: Number, ok: Number}>}
   */
  async updateSingleById(id, update, options = {}) {
    // @ts-ignore
    return this._.updateOne({ _id: ObjectId(id) }, update, options);
  }

  // DELETE ======================================================================

  /**
   * Delete existing document by filter condition
   * @param {ObjectId | String | object} id - id of document
   * @param {Object} [options={}] - query options
   * @returns {Promise<Object>}
   */
  async deleteSingleById(id, options = {}) {
    // @ts-ignore
    return this._.deleteOne({ _id: ObjectId(id) }, options);
  }
}

module.exports = { Provider };
