import { isAlphaNumeric } from "./utils/is-alphanumeric.js";

function isPalindrome(s) {
  if (typeof s !== "string") return "Pass a valid string";

  const chars = s.toLocaleLowerCase().split("");
  let condensedStr = [];

  for (const c of chars) {
    if (isAlphaNumeric(c)) condensedStr.push(c);
  }

  return condensedStr.join("") === condensedStr.reverse().join("");
}

const result = isPalindrome("A man, a plan, a canal: Panama");
const result2 = isPalindrome("A mn, a plan, a canal: Panama");
console.log(result);
console.log(result2);
