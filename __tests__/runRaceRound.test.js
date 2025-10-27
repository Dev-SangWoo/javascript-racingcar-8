import { runRaceRound } from "../src/App.js";

describe("runRaceRound", () => {
  test("랜덤값이 4 이상이면 자동차가 전진한다", () => {
    const cars = [{ name: "pobi", position: 0 }];
    runRaceRound(cars, () => 4); // 항상 4 반환
    expect(cars[0].position).toBe(1);
  });

  test("랜덤값이 3 이하면 자동차가 정지한다", () => {
    const cars = [{ name: "pobi", position: 0 }];
    runRaceRound(cars, () => 3); // 항상 3 반환
    expect(cars[0].position).toBe(0);
  });
});
