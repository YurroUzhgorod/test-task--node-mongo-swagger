const { MODELS } = require("../constants");
const { Provider } = require("./super");

class ViewsProvider extends Provider {
  constructor() {
    super(MODELS.VIEWS);
  }
}

module.exports = { viewsProvider: new ViewsProvider() };
