const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../utils/constants');

const inputView = {
  readUserInputNames(callBack) {
    Console.readLine(MESSAGE.readCarNames, (input) => {
      callBack(input);
    });
  },
  readUserInputTrialCounts(callBack) {
    Console.readLine(MESSAGE.readTrialCount, (input) => {
      callBack(input);
    });
  }
};

module.exports = inputView;
