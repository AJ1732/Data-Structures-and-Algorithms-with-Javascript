// Create a prototype function ona string such it used to check if the strinng is a palindrome

const isPalindrome = (string) => {
  let reversedString = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }

  if (reversedString === string) {
    return true
  } else {
    return false
  }
}

console.log(isPalindrome("racecar"));


String.prototype.isPalindrome = function () {
  let reversedString = this.split("").reverse().join("");
  
  // console.log(reversedString);
  // console.log(this);

  if (this === reversedString) return true;
  return false;
}

console.log("hello".isPalindrome());
// console.log("racecar".isPalindrome());