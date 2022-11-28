const MissionUtils = require('@woowacourse/mission-utils');
const { NUMBER } = require('./constants');

const movementGenerator = () => {
  const random = MissionUtils.Random.pickNumberInRange(
    NUMBER.minRandom,
    NUMBER.maxRandom
  );
  if (random >= NUMBER.validMoveRandom) {
    return true;
  }
  return false;
};

module.exports = { movementGenerator };
