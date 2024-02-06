const { MODELS } = require("../constants");

module.exports = {
  [MODELS.USERS]: require("./user.model"),
  [MODELS.VIEWS]: require("./views.model"),
  [MODELS.CONTENTS]: require("./content.model"),
};
