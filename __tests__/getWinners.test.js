import { getWinners } from "../src/App.js";

test("가장 멀리 간 자동차 하나를 반환한다", () => {
  const cars = [
    { name: "pobi", position: 3 },
    { name: "woni", position: 5 },
  ];
  expect(getWinners(cars)).toEqual(["woni"]);
});

test("공동 우승자가 있으면 모두 반환한다", () => {
  const cars = [
    { name: "pobi", position: 5 },
    { name: "woni", position: 5 },
  ];
  expect(getWinners(cars)).toEqual(["pobi", "woni"]);
});
