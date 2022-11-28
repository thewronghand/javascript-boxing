const { NUMBER } = require('./constants');

const validate = {
  userInputName(name) {
    if (name.length > NUMBER.validNameLength) {
      throw new Error();
    }
  },

  userInputNumber(number) {
    if (isNaN(number) || number === undefined) {
      throw new Error();
    }
    if (number !== parseInt(number)) {
      throw new Error();
    }
    if (number < NUMBER.minTrialCount || number > NUMBER.maxTrialCount) {
      throw new Error();
    }
  }
};

module.exports = validate;
