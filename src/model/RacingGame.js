const RacingCar = require('./RacingCar');

class RacingGame {
  #cars;
  #winners;

  constructor(names) {
    this.#cars = [];
    for (const name of names) {
      this.#cars.push(new RacingCar(name));
    }
    this.#winners = [];
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
    const carNames = this.getCarNames();
    const carMoveResults = this.getCarMoveResults();
    const carMoveResultLengths = getArrayLengths(carMoveResults);
    const winningScore = Math.max(...carMoveResultLengths);
    this.#setWinners(carNames, carMoveResultLengths, winningScore);
  }

  #setWinners(names, moveLengths, winningScore) {
    names.forEach((element, idx) => {
      if (moveLengths[idx] === winningScore) {
        this.#winners.push(element);
      }
    });
  }

  getWinners() {
    return this.#winners;
  }
}

const getArrayLengths = (array) => {
  return array.map((element) => {
    return element.length;
  });
};

module.exports = RacingGame;
