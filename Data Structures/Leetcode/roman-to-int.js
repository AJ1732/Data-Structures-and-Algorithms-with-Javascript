const RomanTable = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const romanStruct =
  /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;

function romanToInt(s) {
  // Check id the string is >= 1 and <= 15
  if (s.length < 1 || s.length > 15) return -1;

  // Check if the letters in the string are Roman
  for (let char of s) if (!(char in RomanTable)) return -1;

  // Chcek if the roman string is valid
  if (!romanStruct.test(s)) return -1;

  // Calculate the roman total
  // let total = 0;

  // for (let i = 0; i < s.length; i++) {
  //   const curr = RomanTable[s[i]];
  //   const next = RomanTable[s[i + 1]] ?? 0;

  //   if (curr < next) total -= curr;
  //   else total += curr;
  // }

  // return total;

  return Array.from(s).reduce((total, currChar, idx, arr) => {
    const currVal = RomanTable[currChar];
    const nextVal = RomanTable[arr[idx + 1]] ?? 0;
    return total + (currVal < nextVal ? -currVal : currVal);
  }, 0);
}

console.log(romanToInt("CM"));
