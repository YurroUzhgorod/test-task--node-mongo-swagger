const ERROR_CODES = Object.freeze({
  401: {
    USER_NOT_AUTHORIZED: "401002",
    USER_TOKEN_EXPIRED: "401004",
  },
  404: {
    ENTITY_NOT_FOUND: "404001",
  },
});

module.exports = { ERROR_CODES };
