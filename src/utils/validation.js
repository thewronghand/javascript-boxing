const { KEY } = require('./constants/value');

const validate = {
  userInputPunchBlock(input) {
    if (input !== KEY.left && input !== KEY.right) {
      throw new Error();
    }
  },

  userInputCommand(input) {
    if (input !== KEY.retry && input !== KEY.quit) {
      throw new Error();
    }
  }
};

module.exports = validate;
