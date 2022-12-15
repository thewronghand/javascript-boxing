const { NUMBER, KEY } = require('./constants/value');
const { Random } = require('@woowacourse/mission-utils');

const boxingRandomGenerator = {
  generateRandomMove() {
    const randomNumber = Random.pickNumberInRange(
      NUMBER.randomNumberLeft,
      NUMBER.randomNumberRight
    );
    if (randomNumber === NUMBER.randomNumberLeft) {
      return KEY.left;
    }
    return KEY.right;
  },

  generateRandomMessage(messages) {
    const randomNumber = Random.pickNumberInRange(
      NUMBER.randomMessageNumberMin,
      NUMBER.randomMessageNumberMax
    );
    return messages[randomNumber];
  }
};

module.exports = boxingRandomGenerator;
