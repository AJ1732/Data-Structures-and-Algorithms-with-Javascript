import { isMainModule } from "../utils/is-main-module.js";
import { reverseString } from "./reverse-string.js";

const reverseIntegerPrototype = (integer) => {
  if (typeof integer !== "number") {
    return -1;
  }

  const integerString = integer.toString();
  const reversedIntegerString = reverseString(integerString)

  return parseInt(reversedIntegerString, 10); 
}

if (isMainModule(import.meta.url)) {
  console.log(reverseIntegerPrototype(1234));
}