import { isMainModule } from "../utils/is-main-module.js";

const fizzBuzz = (limit) => {
  if (typeof limit !== "number") {
    return -1;
  }

  for (let i = 1; i <= limit; i++) {
    switch (true) {
      case i % 3 === 0 && i % 5 === 0:
        console.log("FizzBuzz");
        break;
      case i % 3 === 0:
        console.log("Fizz");
        break;
      case i % 5 === 0:
        console.log("Buzz");
        break;
      default:
        console.log(i);
    }
  }
};

if (isMainModule(import.meta.url)) {
  fizzBuzz(20);
}
