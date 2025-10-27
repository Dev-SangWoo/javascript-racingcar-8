class App {
  async run() {}
}

export function validateCarNames(names) {
  const isInvalid = names.some((name) => name.length === 0 || name.length > 5);
  if (isInvalid) {
    throw new Error("[ERROR] 자동차 이름은 1자 이상 5자 이하만 가능합니다.");
  }
}

export function splitByCommaClean(input) {
  return input.split(",").map((name) => name.trim());
}

export default App;
