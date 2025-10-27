class App {
  async run() {}
}

export function splitByCommaClean(input) {
  return input.split(",").map((name) => name.trim());
}

console.log(splitByCommaClean("pobi,woni,jun"));

export default App;
