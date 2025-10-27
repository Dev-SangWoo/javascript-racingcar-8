import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    runRaceRound(cars, () => MissionUtils.Random.pickNumberInRange(0, 9));
  }
}

//1. , 구분자로 자르기
export function splitByCommaClean(input) {
  return input.split(",").map((name) => name.trim());
}

//2. 이름 5자 넘는지 유효성 검사
export function validateCarNames(names) {
  const isInvalid = names.some((name) => name.length === 0 || name.length > 5);
  if (isInvalid) {
    throw new Error("[ERROR] 자동차 이름은 1자 이상 5자 이하만 가능합니다.");
  }
}

//3. 입력횟수 유효성검사
export function validateTryCount(input) {
  const count = Number(input);
  if (!Number.isInteger(count) || count < 1) {
    throw new Error("[ERROR] 시도 횟수는 1 이상의 숫자여야 합니다.");
  }
  return count;
}

//4.
export function runRaceRound(cars, randomPickFn) {
  cars.forEach((car) => {
    const number = randomPickFn();
    if (number >= 4) {
      car.position += 1;
    }
  });
}

export default App;
