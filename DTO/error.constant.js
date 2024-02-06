const ERRORS = Object.freeze({
  // string errors
  'string.pattern.base': '{{#label}} does not match requirements',
  'string.pattern.name': '{{#label}} does not match requirements',
  'string.pattern.invert.base': '{{#label}} does not match requirements',
  'string.pattern.invert.name': '{{#label}} does not match requirements',

  // error patterns for strings (remove unnecessary)
  // 'string.alphanum': `"{#label}" must only contain alpha-numeric characters"`,
  // 'string.base': `"{#label}" must be a string"`,
  // 'string.base64': `"{#label}" must be a valid base64 string"`,
  // 'string.creditCard': `"{#label}" must be a credit card"`,
  // 'string.dataUri': `"{#label}" must be a valid dataUri string"`,
  // 'string.domain': `"{#label}" must contain a valid domain name"`,
  // 'string.email': `"{#label}" must be a valid email"`,
  // 'string.empty': `"{#label}" is not allowed to be empty"`,
  // 'string.guid': `"{#label}" must be a valid GUID"`,
  // 'string.hex': `"{#label}" must only contain hexadecimal characters"`,
  // 'string.hexAlign': `"{#label}" hex decoded representation must be byte aligned"`,
  // 'string.hostname': `"{#label}" must be a valid hostname"`,
  // 'string.ip': `"{#label}" must be a valid ip address with a {#cidr} CIDR"`,
  // 'string.ipVersion': `"{#label}" must be a valid ip address of one of the following versions {#version} with a {#cidr} CIDR"`,
  // 'string.isoDate': `"{#label}" must be in iso format"`,
  // 'string.isoDuration': `"{#label}" must be a valid ISO 8601 duration"`,
  // 'string.length': `"{#label}" length must be {#limit} characters long"`,
  // 'string.lowercase': `"{#label}" must only contain lowercase characters"`,
  // 'string.max': `"{#label}" length must be less than or equal to {#limit} characters long"`,
  // 'string.min': `"{#label}" length must be at least {#limit} characters long"`,
  // 'string.normalize': `"{#label}" must be unicode normalized in the {#form} form"`,
  // 'string.token': `"{#label}" must only contain alpha-numeric and underscore characters"`,
  // 'string.trim': `"{#label}" must not have leading or trailing whitespace"`,
  // 'string.uri': `"{#label}" must be a valid uri"`,
  // 'string.uriCustomScheme': `"{#label}" must be a valid uri with a scheme matching the {#scheme} pattern"`,
  // 'string.uriRelativeOnly': `"{#label}" must be a valid relative uri"`,
  // 'string.uppercase': `"{#label}" must only contain uppercase characters"`,

  // number errors (remove unnecessary)
  // 'number.base': '{{#label}} must be a number',
  // 'number.greater': '{{#label}} must be greater than {{#limit}}',
  // 'number.infinity': '{{#label}} cannot be infinity',
  // 'number.integer': '{{#label}} must be an integer',
  // 'number.less': '{{#label}} must be less than {{#limit}}',
  // 'number.max': '{{#label}} must be less than or equal to {{#limit}}',
  // 'number.min': '{{#label}} must be greater than or equal to {{#limit}}',
  // 'number.multiple': '{{#label}} must be a multiple of {{#multiple}}',
  // 'number.negative': '{{#label}} must be a negative number',
  // 'number.port': '{{#label}} must be a valid port',
  // 'number.positive': '{{#label}} must be a positive number',
  // 'number.precision': '{{#label}} must have no more than {{#limit}} decimal places',
  // 'number.unsafe': '{{#label}} must be a safe number',

  // other errors
  'any.required': '{{#label}} is required',
});

module.exports = { ERRORS };
