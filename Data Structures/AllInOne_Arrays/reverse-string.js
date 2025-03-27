import { isMainModule } from "../utils/is-main-module.js";

function reverseStringPrototype(string) {
  if (typeof string !== "string") {
    return -1;
  }

  let newString = [];
  const splitString = string.split("");

  for (let i = splitString.length - 1; i >= 0; i--) {
    newString.push(splitString[i]);
  }

  return newString.join("");
}

const reversedProto = reverseStringPrototype("Apple");

// OR SIMPLY
export const reverseString = (string) => string.split("").reverse().join("");
const reversed = reverseString("Hello");

if (isMainModule(import.meta.url)) {
  console.log(reversedProto);
  console.log(reversed);
}
