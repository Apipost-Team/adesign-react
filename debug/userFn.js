module.exports = {
  install(_, __, functions) {
    functions.add('bcolor', (color, index) => {
      return color.value;
    });
  },
};
