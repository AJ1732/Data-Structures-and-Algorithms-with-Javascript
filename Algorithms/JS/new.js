// Splice changes an array by removing or replacing an element in the array
// array.splice(x, y, z...)
// x - the index from where you want to start from
// y - how many numbers are to be removed/deleted from the array
// z - what numbers to be added

const nums = [1, 2, 3, 4, 5];
const deleted = nums.splice(2, 3);

console.log(nums);
console.log(deleted);

const nums2 = [6, 7, 8, 9, 10];
const deleted2 = nums2.splice(2, 3, 6, 7);

console.log(nums2);
console.log(deleted2);

const nums3 = [6, 7, 8, 9, 10];
const deleted3 = nums3.splice(5, 0, 11, 12);

console.log(nums3);
console.log(deleted3);


// Sort
// It will convert the elements to strings and sort them according to UTF-16 encoded values
const numArray = [0, 71, 24, 102, 4, 95, 64, 507, 89];
const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];

console.log(numArray.sort());
console.log(month.sort());

const compareFunction = () => {
  
}















const reverseArray = [];

const reverseFunc = (array) => {
  for (let i = 0; i < array.length; i++) {
    reverseArray.push(array.pop())
  }
  console.log(reverseArray);
}

// reverseFunc(numbers)

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8]

for (let i = 0; i < numbers.length; i++) {
  const pop = numbers.pop()
  // console.log(pop);
}
