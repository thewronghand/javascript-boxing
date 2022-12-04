const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('../utils/constants/message');

const inputView = {
  readPunch(callback) {
    Console.readLine(GAME_MESSAGE.readUserInputPunch, (input) => {
      callback(input);
    });
  },

  readBlock(callback) {
    Console.readLine(GAME_MESSAGE.readUserInputBlock, (input) => {
      callback(input);
    });
  },

  readCommand(callback) {
    Console.readLine(GAME_MESSAGE.readUserInputCommand, (input) => {
      callback(input);
    });
  }
};

module.exports = inputView;
