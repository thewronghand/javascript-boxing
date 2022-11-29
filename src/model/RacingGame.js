const RacingCar = require('./RacingCar');

class RacingGame {
  #cars;
  #winners;

  constructor(names) {
    this.#cars = [];
    for (const name of names) {
      this.#cars.push(new RacingCar(name));
    }
  }

  move() {
    for (const car of this.#cars) {
      car.move();
    }
  }

  getCarNames() {
    const carNames = this.#cars.map((car) => {
      return car.getName();
    });
    return carNames;
  }

  getCarMoveResults() {
    const carMoveResults = this.#cars.map((car) => {
      return car.getMoveResult();
    });
    return carMoveResults;
  }

  calculateWinners() {
    const winners = [];
    const carNames = this.getCarNames();
    const carMoveResults = this.getCarMoveResults();
    const carMoveResultLengths = carMoveResults.map((element) => {
      return element.length;
    });
    const winningScore = Math.max(...carMoveResultLengths);
    carNames.forEach((element, idx) => {
      if (carMoveResultLengths[idx] === winningScore) {
        winners.push(element);
      }
    });
    this.#winners = winners;
  }

  getWinners() {
    return this.#winners;
  }
}

module.exports = RacingGame;
