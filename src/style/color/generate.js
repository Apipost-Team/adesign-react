const { generate } = require('apipost-color');

module.exports = {
  install(_, __, functions) {
    functions.add('generate-color', (color, index) => {
      return generate(color.value, index.value);
    });
  },
};
