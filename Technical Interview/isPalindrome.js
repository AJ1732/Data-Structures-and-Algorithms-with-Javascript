// Create a prototype function ona string such it used to check if the strinng is a palindrome

// MY ANSWER
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

console.log(isPalindrome("hello")); // false
console.log(isPalindrome("racecar")); // true

// FROM THE VIDEO
String.prototype.isPalindrome = function () {
  let reversedString = this.split("").reverse().join("");
  if (String(this) === reversedString) return true;
  return false;
}

console.log("hello".isPalindrome()); // false
console.log("racecar".isPalindrome()); // true

// Why is String(this) being compared to the reversdString 
// and why does it work for the fucntion


// FROM THE COMMENT SECTION @mn_f30 
/* For the first question:  Primitive values like strings are automatically
  converted to objects (wrappers) when you access their properties or methods. 
  In this case, when you call a method on a string literal, 
  JavaScript temporarily converts the string to a String object, 
  which is why you see [String: 'racecar'].
  At the end, you're comparing a string literal to a string object using ===. 
  To make it work, you can just compare values (==), 
  or do something like, 'this.toLowerCase()', 
  which will act on the string literal of the string object and return true. 
  Confusing...I know.
*/

String.prototype.isPalindrome2 = function () {
  let reversedString = this.split("").reverse().join("");
  if (this.toLowerCase() === reversedString) return true;
  return false;
}

console.log("hello".isPalindrome2()); // false
console.log("racecar".isPalindrome2()); // true





// FROM THE COMMENT SECTION @victor63666
String.prototype.isPalindrome3 = function () {
  return this.split("").reverse().join("").toLowerCase() === this.toLowerCase()
};

console.log("racecar".isPalindrome3()); // true