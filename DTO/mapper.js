const { HttpException } = require("../helpers/errors");

class Mapper {
  async toDTO(schema, req, mutations = { pagination: false }) {
    if (!schema) {
      throw new Error("Schema is invalid or not provided");
    }

    try {
      const { body, params, query, uId } = req;

      let data = {
        ...body,
        ...params,
        ...query,
        userId: uId,
      };

      if (mutations.pagination) {
        const { count } = query;
        let { page, limit } = query;

        page = page && +page > 0 ? +page : 1;

        if (!limit) {
          limit = count ? +count : null;
        }

        limit = +limit > 0 ? Number(limit) : 15;

        const skip = (+page - 1) * limit;

        data = { ...data, skip, limit };
      }

      const DTO = await schema.validateAsync(data, {
        errors: {
          wrap: {
            label: "",
          },
        },
        convert: true,
        stripUnknown: true,
      });

      return DTO;
    } catch (e) {
      if (e?.message === "marketplace-not-found") {
        throw HttpException.NOT_FOUND();
      }

      throw HttpException.BAD_REQUEST(e.message);
    }
  }
}

module.exports = { Mapper: new Mapper() };
