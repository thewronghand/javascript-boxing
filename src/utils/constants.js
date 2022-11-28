const SIGN = {
  indicator: ': ',
  movement: '-',
  divider: ', ',
  comma: ','
};

const NUMBER = {
  validNameLength: 5,
  validMoveRandom: 4,
  minRandom: 0,
  maxRandom: 9,
  minTrialCount: 1,
  maxTrialCount: 10
};

const MESSAGE = {
  readCarNames: `자동차 이름을 ${NUMBER.validNameLength}자 이하로 콤마로 구분하여 입력해주세요.\n올바른 예) east,west,south,north`,
  readTrialCount: '시도할 횟수를 입력해주세요.',
  result: '실행 결과',
  winnerAnnouncement: '최종 우승자: '
};

const ERROR = {
  userInputNameInvalid: `[ERROR] 자동차 이름은 ${NUMBER.validNameLength}자 이하로 콤마로 구분하여 입력해야 합니다.`,
  userInputNumberInvalid: `[ERROR] 시도 횟수는 ${NUMBER.minTrialCount} 이상 ${NUMBER.maxTrialCount} 이하의 자연수만 입력할 수 있습니다.`
};

module.exports = { SIGN, NUMBER, MESSAGE, ERROR };
