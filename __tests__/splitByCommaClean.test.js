import { splitByCommaClean } from "../src/App.js";

test("쉼표로 구분된 문자열을 배열로 잘 분리하고, 공백도 제거해야 한다", () => {
  const input = "pobi, woni, jun";

  const result = splitByCommaClean(input);

  const expectedAnswer = ["pobi", "woni", "jun"];

  expect(result).toEqual(expectedAnswer);
});
