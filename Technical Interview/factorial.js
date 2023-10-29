// USING FOR LOOP
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5));

// USING RECURSION
function factorial2(n) {
  if (n === 1) {
    return 1
  }
  return n * factorial2(n - 1);
}

console.log(factorial2(1));
