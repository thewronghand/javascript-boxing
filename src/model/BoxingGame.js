const Player = require('./Player');
const Computer = require('./Computer');
const { KEY, VALUE, NUMBER } = require('../utils/constants/value');
const { SIGN } = require('../utils/constants/message');

class BoxingGame {
  #player;
  #computer;
  #playerPunch;
  #playerHit;
  #computerPunch;
  #computerHit;
  #gameResult;

  constructor() {
    this.#player = new Player();
    this.#computer = new Computer();
    this.#playerPunch = 0;
    this.#playerHit = 0;
    this.#computerPunch = 0;
    this.#computerHit = 0;
  }

  getPlayerHealthPoints() {
    return this.#player.getHealthPoints();
  }

  getComputerHealthPoints() {
    return this.#computer.getHealthPoints();
  }

  getPlayerComputerPunchHit() {
    return [
      this.#playerPunch,
      this.#playerHit,
      this.#computerPunch,
      this.#computerHit
    ];
  }

  getGameResult() {
    return this.#gameResult;
  }

  handlePlayerPunch(input) {
    const playerPunchResult = this.checkPlayerPunchSuccessFail(input);
    const computerHealth = this.getComputerHealthPoints();
    if (computerHealth === NUMBER.defeatHealthPoint) {
      this.#gameResult = SIGN.win;
      return [playerPunchResult, VALUE.playerWin];
    }
    const result = [playerPunchResult, VALUE.continueGame];
    return result;
  }

  handlePlayerBlock(input) {
    const playerBlockResult = this.checkPlayerBlockSuccessFail(input);
    const playerHealth = this.getPlayerHealthPoints();
    if (playerHealth === NUMBER.defeatHealthPoint) {
      this.#gameResult = SIGN.defeat;
      return [playerBlockResult, VALUE.playerDefeat];
    }
    return [playerBlockResult, VALUE.continueGame];
  }

  checkPlayerPunchSuccessFail(input) {
    const computerBlock = this.#computer.generateRandomAttackBlock();
    if (input !== computerBlock) {
      this.#computer.receiveDamage();
      this.#playerPunch = this.#playerPunch + 1;
      this.#playerHit = this.#playerHit + 1;
      return VALUE.hit;
    }
    this.#playerPunch = this.#playerPunch + 1;
    return VALUE.block;
  }

  checkPlayerBlockSuccessFail(input) {
    const computerPunch = this.#computer.generateRandomAttackBlock();
    if (input !== computerPunch) {
      this.#player.receiveDamage();
      this.#computerPunch = this.#computerPunch + 1;
      this.#computerHit = this.#computerHit + 1;
      return VALUE.hit;
    }
    this.#computerPunch = this.#computerPunch + 1;
    return VALUE.block;
  }
}

module.exports = BoxingGame;
