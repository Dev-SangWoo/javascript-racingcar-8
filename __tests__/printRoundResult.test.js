import { MissionUtils } from "@woowacourse/mission-utils";
import { printRoundResult } from "../src/App.js";

describe("printRoundResult", () => {
  beforeEach(() => {
    // Console.print를 mock 함수로 교체
    MissionUtils.Console.print = jest.fn();
  });

  test("자동차들의 현재 위치를 출력한다", () => {
    const cars = [
      { name: "pobi", position: 2 },
      { name: "woni", position: 1 },
    ];

    printRoundResult(cars);

    // 첫 번째 자동차 출력 확인
    expect(MissionUtils.Console.print).toHaveBeenCalledWith("pobi : --");
    // 두 번째 자동차 출력 확인
    expect(MissionUtils.Console.print).toHaveBeenCalledWith("woni : -");
    // 마지막 빈 줄 출력 확인
    expect(MissionUtils.Console.print).toHaveBeenCalledWith("");
  });

  test("자동차가 없으면 빈 줄만 출력한다", () => {
    const cars = [];

    printRoundResult(cars);

    expect(MissionUtils.Console.print).toHaveBeenCalledTimes(1);
    expect(MissionUtils.Console.print).toHaveBeenCalledWith("");
  });
});
