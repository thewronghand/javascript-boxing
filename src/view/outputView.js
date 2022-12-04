const { Console } = require('@woowacourse/mission-utils');
const {
  COMPUTER_MESSAGE,
  GAME_MESSAGE,
  SIGN
} = require('../utils/constants/message');
const { VALUE } = require('../utils/constants/value');
const boxingRandomGenerator = require('../utils/boxingRandomMoveGenerator');

const outputView = {
  printGameStartMessage() {
    Console.print(GAME_MESSAGE.gameStart);
  },

  printError(error) {
    Console.print(error);
  },

  printHealthPoints(playerHealth, computerHealth) {
    Console.print(
      GAME_MESSAGE.playerHealth +
        `${playerHealth}` +
        '\n' +
        GAME_MESSAGE.computerHealth +
        `${computerHealth}`
    );
  },

  printPunchResult(result) {
    if (result == VALUE.hit) {
      Console.print(GAME_MESSAGE.playerPunchHit);
      this.printRandomMessage(COMPUTER_MESSAGE.computerHit);
      return;
    }
    Console.print(GAME_MESSAGE.playerPunchBlock);
    this.printRandomMessage(COMPUTER_MESSAGE.computerBlock);
  },

  printBlockResult(result) {
    if (result === VALUE.block) {
      Console.print(GAME_MESSAGE.computerPunchBlock);
      this.printRandomMessage(COMPUTER_MESSAGE.playerBlock);
      return;
    }
    Console.print(GAME_MESSAGE.computerPunchHit);
    this.printRandomMessage(COMPUTER_MESSAGE.playerHit);
  },

  printRandomMessage(messages) {
    const randomMessage = boxingRandomGenerator.generateRandomMessage(messages);
    Console.print(SIGN.computerQuote + randomMessage);
  },

  printGameResult(game) {
    const rate = this.getHitBlockRate(game);
    const [hitRate, blockRate] = rate;
    const gameResult = game.getGameResult();
    Console.print(
      GAME_MESSAGE.resultTitle + GAME_MESSAGE.resultWinDefeat + gameResult
    );
    this.printHitBlockRate(hitRate, blockRate);
  },

  printHitBlockRate(hitRate, blockRate) {
    Console.print(
      GAME_MESSAGE.resultHitRate +
        hitRate +
        '\n' +
        GAME_MESSAGE.resultBlockRate +
        blockRate
    );
  },

  getHitBlockRate(game) {
    const hitBlockRateData = game.getPlayerComputerPunchHit();
    const [playerPunch, playerHit, computerPunch, computerHit] =
      hitBlockRateData;
    const hitRate =
      String(((playerHit / playerPunch) * 100).toFixed(1)) + SIGN.percentage;
    const blockRate =
      String(100 - ((computerHit / computerPunch) * 100).toFixed(1)) +
      SIGN.percentage;
    return [hitRate, blockRate];
  }
};
module.exports = outputView;
