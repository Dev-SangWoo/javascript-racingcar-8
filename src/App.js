import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      // 1. 자동차 이름 입력
      const rawNames = await MissionUtils.Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      );
      const names = splitByCommaClean(rawNames);
      validateCarNames(names);

      // 자동차 객체 생성
      const cars = names.map((name) => ({ name, position: 0 }));

      // 2. 시도 횟수 입력
      const tryCountInput =
        await MissionUtils.Console.readLineAsync(
          "시도할 횟수는 몇 회인가요?\n"
        );
      const tryCount = validateTryCount(tryCountInput);

      MissionUtils.Console.print("\n실행 결과");

      // 3. 라운드 진행
      for (let i = 0; i < tryCount; i++) {
        runRaceRound(cars, () => MissionUtils.Random.pickNumberInRange(0, 9));
        printRoundResult(cars); // 🔹 별도 함수 호출로 Indent 2 유지
      }

      // 4. 최종 우승자 출력
      const winners = getWinners(cars);
      MissionUtils.Console.print(`최종 우승자 : ${winners.join(", ")}`);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
    }
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

//4. 라운드 진행
export function runRaceRound(cars, randomPickFn) {
  cars.forEach((car) => {
    const number = randomPickFn();
    if (number >= 4) {
      car.position += 1;
    }
  });
}

//* 라운드 결과 출력 (indent 줄일려고 추가 신설)
export function printRoundResult(cars) {
  cars.forEach((car) => {
    MissionUtils.Console.print(`${car.name} : ${"-".repeat(car.position)}`);
  });
  MissionUtils.Console.print(""); // 라운드 구분용 빈 줄
}

//5. 우승자 선별
export function getWinners(cars) {
  const max = Math.max(...cars.map((car) => car.position));
  return cars.filter((car) => car.position === max).map((car) => car.name);
}

export default App;
