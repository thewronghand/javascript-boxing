const inputView = require('../view/inputView');
const outputView = require('../view/outputView');
const BoxingGame = require('../model/BoxingGame');
const validate = require('../utils/validation');
const { Console } = require('@woowacourse/mission-utils');
const { VALUE, KEY } = require('../utils/constants/value');
const { ERROR } = require('../utils/constants/message');

class BoxingGameController {
  #inputView;
  #outputView;

  constructor() {
    this.#inputView = inputView;
    this.#outputView = outputView;
    this.initiate();
  }

  initiate() {
    const boxingGame = new BoxingGame();
    this.#outputView.printGameStartMessage();
    this.receiveUserInputPunch(boxingGame);
  }

  receiveUserInputPunch(game) {
    this.showCurrentGameStatus(game);
    this.#inputView.readPunch((input) => {
      this.handlePunchException(input, game);
    });
  }

  receiveUserInputBlock(game) {
    this.showCurrentGameStatus(game);
    this.#inputView.readBlock((input) => {
      this.handleBlockException(input, game);
    });
  }

  receiveUserInputCommand(game) {
    this.#inputView.readCommand((input) => {
      this.handleCommandException(input, game);
    });
  }

  handlePunchException(input, game) {
    try {
      validate.userInputPunchBlock(input);
      this.handlePunch(input, game);
    } catch (error) {
      this.#outputView.printError(ERROR.userInputKeyInvalid);
      this.receiveUserInputPunch(game);
    }
  }

  handlePunch(input, game) {
    const punchResult = game.handlePlayerPunch(input);
    const [result, status] = punchResult;
    this.#outputView.printPunchResult(result);
    if (status === VALUE.playerWin) {
      this.showCurrentGameStatus(game);
      this.#outputView.printGameResult(game);
    }
    if (status === VALUE.continueGame) {
      this.receiveUserInputBlock(game);
    }
  }

  handleBlockException(input, game) {
    try {
      validate.userInputPunchBlock(input);
      this.handleBlock(input, game);
    } catch (error) {
      this.#outputView.printError(ERROR.userInputKeyInvalid);
      this.receiveUserInputBlock(game);
    }
  }

  handleBlock(input, game) {
    const blockResult = game.handlePlayerBlock(input);
    const [result, gameStatus] = blockResult;
    this.#outputView.printBlockResult(result);
    if (gameStatus === VALUE.playerDefeat) {
      this.showCurrentGameStatus(game);
      this.receiveUserInputCommand(game);
    }
    if (gameStatus === VALUE.continueGame) {
      this.receiveUserInputPunch(game);
    }
  }

  handleCommandException(input, game) {
    try {
      validate.userInputCommand(input);
      this.handleGameCommand(input, game);
    } catch (error) {
      this.#outputView.printError(ERROR.userInputCommandInvalid);
      this.receiveUserInputCommand(game);
    }
  }

  handleGameCommand(input, game) {
    if (input === KEY.retry) {
      game.retry();
      this.#outputView.printGameStartMessage();
      this.receiveUserInputPunch(game);
    }
    this.#outputView.printGameResult(game);
    Console.close();
  }

  showCurrentGameStatus(game) {
    const playerHealth = game.getPlayerHealthPoints();
    const computerHealth = game.getComputerHealthPoints();
    this.#outputView.printHealthPoints(playerHealth, computerHealth);
  }
}

module.exports = BoxingGameController;
