/*

1. [[1], [2]] = [1, 2]
2. [[[1], [2]], [5]]= [1, 2, 5]
3. copy

*/

Array.prototype.flatten = function() {
  const result = [];

  // loop over this
  for (const value of this) {
    // is it an array?
    if (Array.isArray(value)) { 
      // yes -> loop through this arrat, recurse?
      const flatten = value.flatten()
      result.push(...flatten) 
      // spreading the array and pushing to the result array
    } else {
      // no -> put in result
      result.push(value)
    }
  }

  return result;
}

console.log([].flatten());
console.log([1, 2, 3].flatten());
console.log([[1, 2], 3, 4].flatten());
console.log([[1, 2], [3, [4, 5]], 6].flatten());