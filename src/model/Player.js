const { NUMBER } = require('../utils/constants/value');

class Player {
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
}

module.exports = Player;
