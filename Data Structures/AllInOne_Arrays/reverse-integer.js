import { isMainModule } from "../utils/is-main-module.js";
import { reverseString } from "./reverse-string.js";
import { splitInteger } from "./split-integer.js";
import { joinNumbers } from "./join-numbers.js";

const reverseIntegerPrototype = (integer) => {
  if (typeof integer !== "number") {
    return -1;
  }

  const integerString = integer.toString();
  const reversedIntegerString = reverseString(integerString);

  return parseInt(reversedIntegerString, 10);
};

// WITHOUT CONVERTING TO A STRING
const reverseInteger = (integer) => {
  if (typeof integer !== "number") {
    return -1;
  }

  const splitIntegers = splitInteger(integer);

  return joinNumbers(splitIntegers.reverse());
};

if (isMainModule(import.meta.url)) {
  console.log(reverseInteger(10));
  console.log(reverseIntegerPrototype(1234));
}
