const HTTP_STATUS = Object.freeze({
  BAD_REQUEST: "BAD_REQUEST",
  UNAUTHORIZED: "UNAUTHORIZED",
  CONFLICT: "CONFLICT",
  NOT_FOUND: "NOT_FOUND",
});

const HTTP_STATUS_CODES = Object.freeze({
  /** Client error responses */
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  CONFLICT: 409,
});

const HTTP_STATUS_MESSAGES = Object.freeze({
  BAD_REQUEST: "Bad Request",
  UNAUTHORIZED: "You are not authorized",
  CONFLICT: "Conflict",
  NOT_FOUND: "Not Found",
});

module.exports = {
  HTTP_STATUS_MESSAGES,
  HTTP_STATUS_CODES,
  HTTP_STATUS,
};
