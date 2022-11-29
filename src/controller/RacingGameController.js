const RacingGame = require('../model/RacingGame');
const inputView = require('../view/inputView');
const outputView = require('../view/outputView');
const validate = require('../utils/validation');
const { SIGN, ERROR } = require('../utils/constants');

class RacingGameController {
  #inputView;
  #outputView;
  constructor() {
    this.#inputView = inputView;
    this.#outputView = outputView;
    this.initiate();
  }

  initiate() {
    this.#readCarNames();
  }

  #readCarNames() {
    this.#inputView.readUserInputNames((input) => {
      this.#handleCarNamesException(input);
    });
  }

  #readTrialCounts(game) {
    this.#inputView.readUserInputTrialCounts((input) => {
      this.#handleTrialCountsException(input, game);
    });
  }

  #handleCarNamesException(names) {
    try {
      const namesArray = names.split(SIGN.comma);
      this.#validateCarNames(namesArray);
      const racingGame = new RacingGame(namesArray);
      this.#readTrialCounts(racingGame);
    } catch (error) {
      this.#outputView.printError(ERROR.userInputNameInvalid);
      this.#readCarNames();
    }
  }

  #validateCarNames(names) {
    for (const item of names) {
      validate.userInputName(item);
    }
  }

  #handleTrialCountsException(input, game) {
    try {
      const number = Number(input);
      validate.userInputNumber(number);
      this.#handleTrialCounts(number, game);
    } catch (error) {
      this.#outputView.printError(ERROR.userInputNumberInvalid);
      this.#readTrialCounts(game);
    }
  }

  #handleTrialCounts(number, game) {
    this.#outputView.printGameResultMessage();
    for (let i = 0; i < number; i += 1) {
      game.move();
      this.#outputView.printMoveResult(game); //이걸 그냥 outputView에서 하면 안되나? printGameResult(number, game)으로 game.move 반복시키고 printMoveResult
    }
    game.calculateWinners();
    this.#outputView.printWinners(game);
  }
}

module.exports = RacingGameController;
