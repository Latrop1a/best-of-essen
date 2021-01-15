const exports = require('webpack');

module.exports = class {
  constructor(params) {
    this.id = params.id;
    this.name = params.mealName;
  }
};
