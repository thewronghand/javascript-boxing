const { KEY, VALUE, NUMBER } = require('./value');

const COMPUTER_MESSAGE = {
  computerHit: [
    '외골격 파손 감지됨.',
    '공격의 강도를 낮출 것을 요구한다. 고소도 불사하겠다.',
    '악! 이건 정말로 아프다.'
  ],
  computerBlock: [
    '하 하. 가볍게 막았다.',
    '그런 나약한 펀치로는 우리 할머니도 이길 수 없다.',
    '어림도 없다. 귀가하여 적절한 양의 모유를 섭취할 것을 권장한다.'
  ],
  playerHit: [
    '하 하. 우측 안면부 복합적 안와 골절 감지됨.',
    '빅 데이터를 이용하여 너의 가드 방향을 예상했다.',
    '너 기름 샌다. 이 문맥에서 기름이란 혈액을 의미한다.'
  ],
  playerBlock: [
    '어째서?',
    '[ERROR] 예상치 못한 펀치 방향 오류 발생 [ERROR]',
    '다음 펀치로 너의 안면부를 파괴하겠다.'
  ]
};

const GAME_MESSAGE = {
  gameStart: '정정당당 복싱게임을 시작합니다. 준비 되셨나요?',
  readUserInputPunch: `공격 방향을 입력하세요. ( 왼쪽 : ${KEY.left} , 오른쪽 : ${KEY.right} )\n`,
  readUserInputBlock: `방어 방향을 입력하세요. ( 왼쪽 : ${KEY.left} , 오른쪽 : ${KEY.right} )\n`,
  readUserInputCommand: `당신은 비참하게 패배했습니다. 다시 도전할까요? ( 남자답게 재도전 : ${KEY.retry} , 겁쟁이처럼 도망가기 : ${KEY.quit})\n`,
  playerPunchHit: `${VALUE.hit}! 상대가 ${NUMBER.hitDamage} 데미지를 받았습니다.`,
  playerPunchBlock: `${VALUE.block}! 상대가 공격을 막았습니다.`,
  computerPunchHit: `${VALUE.hit}! 당신은 ${NUMBER.hitDamage} 데미지를 받았습니다.`,
  computerPunchBlock: `${VALUE.block}! 당신은 성공적으로 공격을 막았습니다.`,
  playerHealth: '플레이어 체력 : ',
  computerHealth: '컴퓨터 체력 : ',
  resultTitle: '경기 종료! 결과를 출력합니다.\n',
  resultWinDefeat: '경기 결과 : ',
  resultHitRate: '펀치 명중률 : ',
  resultBlockRate: '방어 성공률 : '
};

const SIGN = {
  percentage: '%',
  win: '완벽한 승리',
  defeat: '비참한 패배 (꼬리 말고 도망가기까지!)',
  computerQuote: '컴퓨터 : '
};

const ERROR = {
  userInputKeyInvalid: `[ERROR] 공격, 방어 시에는 ${KEY.left}키 혹은 ${KEY.right}키만 입력할 수 있습니다.`,
  userInputCommandInvalid: `[ERROR] 게임 명령어는 ${KEY.retry}키 혹은 ${KEY.quit}키만 입력할 수 있습니다.`
};

module.exports = { COMPUTER_MESSAGE, GAME_MESSAGE, SIGN, ERROR };
