import { validateTryCount } from "../src/App.js";

test("정상적인 숫자 입력 시 반환", () => {
  expect(validateTryCount("3")).toBe(3);
});

test("0 이하 입력 시 에러 발생", () => {
  expect(() => validateTryCount("0")).toThrow("[ERROR]");
});
