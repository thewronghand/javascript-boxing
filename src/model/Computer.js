const boxingRandomGenerator = require('../utils/boxingRandomMoveGenerator');
const boxingRandomMoveGenerator = require('../utils/boxingRandomMoveGenerator');
const { NUMBER } = require('../utils/constants/value');

class Computer {
  #healthPoints;

  constructor() {
    this.#healthPoints = NUMBER.initialHealthPoints;
  }

  getHealthPoints() {
    return this.#healthPoints;
  }

  receiveDamage() {
    this.#healthPoints = this.#healthPoints - NUMBER.hitDamage;
  }

  resetHealthPoints() {
    this.#healthPoints = NUMBER.initialHealthPoints;
  }

  generateRandomAttackBlock() {
    const randomMove = boxingRandomGenerator.generateRandomMove();
    return randomMove;
  }
}

module.exports = Computer;
