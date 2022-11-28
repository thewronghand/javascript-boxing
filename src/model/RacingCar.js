const { SIGN } = require('../utils/constants');
const { canMove } = require('../utils/movementGenerator');

class RacingCar {
  #name;
  #moveResult;

  constructor(name) {
    this.#name = name;
    this.#moveResult = [];
  }

  getName() {
    return this.#name.concat(SIGN.indicator);
  }

  getMoveResult() {
    return this.#moveResult.join('');
  }

  move() {
    if (canMove()) {
      this.#moveResult.concat(SIGN.movement);
    }
  }
}

module.exports = App;
