const {
  HTTP_STATUS,
  HTTP_STATUS_CODES,
  HTTP_STATUS_MESSAGES,
} = require("./constants");

const { ERROR_CODES } = require("../../constants/errorCodes");

class HttpException extends Error {
  constructor(
    statusCode = HTTP_STATUS_CODES.BAD_REQUEST,
    status = HTTP_STATUS.BAD_REQUEST,
    payload = {}
  ) {
    super();

    this.status = status;

    this.name = "Http Exception";

    this.statusCode = statusCode;

    const { cause, errorCode, message, contextFn = this.constructor } = payload;

    Error.captureStackTrace(this, contextFn);

    this.message = message ?? status;

    this.cause = cause;

    this.errorCode = errorCode;
  }

  static BAD_REQUEST(message, errorCode = HTTP_STATUS_CODES.BAD_REQUEST) {
    return new this(
      HTTP_STATUS_CODES.BAD_REQUEST,
      HTTP_STATUS_MESSAGES.BAD_REQUEST,
      {
        contextFn: this.BAD_REQUEST,
        message,
        errorCode,
      }
    );
  }

  static CONFLICT(message) {
    return new this(HTTP_STATUS_CODES.CONFLICT, HTTP_STATUS_MESSAGES.CONFLICT, {
      contextFn: this.CONFLICT,
      message,
    });
  }

  static UNAUTHORIZED(message, errorCode = HTTP_STATUS_CODES.UNAUTHORIZED) {
    return new this(
      HTTP_STATUS_CODES.UNAUTHORIZED,
      HTTP_STATUS_MESSAGES.UNAUTHORIZED,
      {
        contextFn: this.UNAUTHORIZED,
        message,
        errorCode,
      }
    );
  }

  static NOT_FOUND(message, errorCode = ERROR_CODES[404].ENTITY_NOT_FOUND) {
    return new this(
      HTTP_STATUS_CODES.NOT_FOUND,
      HTTP_STATUS_MESSAGES.NOT_FOUND,
      {
        contextFn: this.NOT_FOUND,
        message,
        errorCode,
      }
    );
  }
}

module.exports = { HttpException };
