import { validateCarNames } from "../src/App.js";

test("모든 이름이 유효하면 에러 없이 통과한다", () => {
  expect(() => validateCarNames(["pobi", "woni"])).not.toThrow();
});

test("5자 초과 이름이 있으면 에러 발생", () => {
  expect(() => validateCarNames(["junseo"])).toThrow("[ERROR]");
});
