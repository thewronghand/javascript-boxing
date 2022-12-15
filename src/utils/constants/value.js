const KEY = {
  left: 'L',
  right: 'R',
  retry: 'R',
  quit: 'Q'
};

const VALUE = {
  hit: 'HIT',
  block: 'BLOCK',
  playerDefeat: 'playerDefeat',
  playerWin: 'playerWin',
  continueGame: 'continueGame'
};

const NUMBER = {
  initialHealthPoints: 3,
  hitDamage: 1,
  defeatHealthPoint: 0,
  randomNumberLeft: 0,
  randomNumberRight: 1,
  randomMessageNumberMin: 0,
  randomMessageNumberMax: 2
};

module.exports = { KEY, VALUE, NUMBER };
