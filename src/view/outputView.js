const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, SIGN } = require('../utils/constants');

const outputView = {
  printGameResultMessage() {
    Console.print(MESSAGE.result);
  },

  printMoveResult(game) {
    const names = game.getCarNames();
    const result = game.getCarMoveResults();
    names.forEach((element, idx) => {
      Console.print(element + SIGN.indicator + result[idx]);
    });
    Console.print('');
  },

  printWinners(game) {
    const winners = game.getWinners();
    const gameWinners = winners.join(SIGN.divider);
    Console.print(MESSAGE.winnerAnnouncement + gameWinners);
  },

  printError(error) {
    Console.print(error);
  }
};

module.exports = outputView;
