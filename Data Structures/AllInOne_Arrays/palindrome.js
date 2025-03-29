import { isMainModule } from "../utils/is-main-module.js";
import { reverseString } from "./reverse-string.js";
import { splitInteger } from "./split-integer.js";
import { joinNumbers } from "./join-numbers.js";

const isPalindromeString = (string) => {
  if (typeof string !== "string") {
    return -1;
  }

  if (string === reverseString(string)) return true;
  return false;
};

//  ---------------------

function isPalindromeIntegerPrototype(x) {
  const splitedIntegers = splitInteger(x);
  const reversedIntegerArray = [];

  for (let i = splitedIntegers.length - 1; i >= 0; i--) {
    const element = splitedIntegers[i];
    reversedIntegerArray.push(element);
  }

  return joinNumbers(splitedIntegers.reverse()) === x;
}

//  ---------------------

function isPalindromeInteger(x) {
  const digits = splitInteger(x);
  let left = 0;
  let right = digits.length - 1;

  while (left < right) {
    if (digits[left] !== digits[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

if (isMainModule(import.meta.url)) {
  console.log(isPalindromeString("hello"));
  console.log(isPalindromeIntegerPrototype(101));
  console.log(isPalindromeInteger(121));
}
