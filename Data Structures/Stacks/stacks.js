// Functions of Stack includes 
// Push, Pop, Peek, length, Clear


class Stack {
  constructor() {
    this.dataStore = []
    this.count = 0;
  }

  push(element) {
    this.dataStore[this.count++] = element;
  }

  pop() {
    if (this.count === 0) {
      return undefined
    }

    const result =  this.dataStore[--this.count];
    delete this.dataStore[this.count]
    return result
  }

  peek() {
    return this.dataStore[this.count - 1]
  }

  length() {
    return this.count;
  }

  clear() {
    this.dataStore = [];
    return this.count = 0;
  }
}

var s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");

// console.log("length: " + s.length());
// console.log(s.peek())

var popped = s.pop();
// console.log("The popped element is: " + popped);
// console.log(s.peek());
// console.log(s.dataStore);

s.push("Cynthia");
// console.log(s.peek());

s.clear();
// console.log("length: " + s.length());
// console.log(s.peek());
// console.log(s.dataStore);

// s.push("Clayton");
// console.log(s.peek());
// console.log("length: " + s.length());





// Base Conversion
// let num = 16
// let result = Math.floor(num /= 2);
// console.log(result);


function mulBase(num, base) {
  let s = new Stack();
  do {
    s.push(num % base);
    num = Math.floor(num /= base);
  } while (num > 0);

  console.log(s.dataStore);

  var converted = "";
  while (s.length() > 0) {
    converted += s.pop();
  }
  return converted;
}

const substrate = 125;
const base = 8;

let convertToBase = mulBase(substrate, base)
console.log(`${substrate} converted to base ${base} is ${convertToBase}`);


// Palindrome
const isPalindrome = (word) => {
  let s = new Stack();
  for (let i = 0; i < word.length; ++i) {
    s.push(word[i]);
  }
  console.log(s.dataStore);

  let rword = '';
  while(s.length() > 0) {
    rword += s.pop()
  }
  console.log(rword);

  // OR
  // for (let i = 0; i < word.length; ++1) {
  //   rword += s.pop()
  // }

  if (word == rword) {
    console.log (`${word} is a palindrome`);
  } else {
    console.log (`${word} is not a palindrome`);
  }
}

isPalindrome("racecar")
isPalindrome("hello")


function factorial(n) {
  if (n === 0){
    return 1;
  }
  else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5));

// Using a stack
function fact(n) {
  let s = new Stack();
  while (n > 1) {
    s.push(n--);
  }
  console.log(s.dataStore);
 
  let product = 1;
  while (s.length() > 0) {
    product *= s.pop();
  }
  return product
}

const factorialResult = fact(5);
console.log(factorialResult);


// Last Unclosed(Opened) First Closed
function isBalancedParenthesis(expression) {
  let opening = new Stack();
  let closing = new Stack();
  for (let i = 0; i < expression.length; ++i) {
    if (expression[i] === '(') {
      opening.push(expression[i]);
    } else if (expression[i] === ')') {
      closing.push(expression[i]);
    }
  }

  // console.log(opening.dataStore);
  // console.log(closing.dataStore);

  if (opening.length() === closing.length()) {
    console.log(`The arithmetic expression has balanced parentheses`)
  } else {
    console.log(`The arithmetic expression does not have balanced parentheses`)
  }
}
const expression = `2.3 + 23 / 12 + (3.14159 * .24`;
isBalancedParenthesis(expression)
