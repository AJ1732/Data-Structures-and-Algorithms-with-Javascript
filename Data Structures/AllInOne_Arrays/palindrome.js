import { isMainModule } from "../utils/is-main-module.js";
import { reverseString } from "./reverse-string.js";

const isPalindrome = (string) => {
  if (typeof string !== "string") {
    return -1;
  }

  if (string === reverseString(string)) return true;
  return false;
};

if (isMainModule(import.meta.url)) {
  console.log(isPalindrome("hello"));
}
