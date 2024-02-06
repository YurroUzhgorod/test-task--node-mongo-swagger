const REGULAR_EXPRESSIONS = Object.freeze({
  PASSWORD: /[^\s]{6,}/,
  EMAIL_REGEXP: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  OBJECT_ID: /^[0-9a-fA-F]{24}$/,
});

module.exports = { REGULAR_EXPRESSIONS };
