// We can verify that an object is an array by calling the Array.isArray() function, like this:
var number = 3;
var arr = [7,4,1776];
// console.log(Array.isArray(number)); // displays false
// console.log(Array.isArray(arr));


// Iterating through an array
var numbers = [1, 2, 3, 5, 8, 13, 21];

var sum = 0;
for (var i = 0; i < numbers.length; ++i) {
sum += numbers[i];
}
// console.log(sum);


//Practising a reduce function
const sum1 = numbers.reduce( (cv, n) => cv + n, 0);
// console.log(sum1);


// Array from splitting words 
var sentence = "the quick brown fox, jumped over the lazy dog";

var words = sentence.split(",");
// console.log(words);

for (var i = 0; i < words.length; ++i) {
  // console.log("word " + i + ": " + words[i]);
}


// Shallow Copy
var nums = [];
for (var i = 0; i < 10; ++i) {
  nums.push(i);
}
var samenums = nums;
nums[0] = 400;
// console.log(samenums);


// Deep Copy
function copy(arr1, arr2) {
  for (var i = 0; i < arr1.length; ++i) {
  arr2[i] = arr1[i];
  }
}
 
var nums1 = [];

for (var i = 0; i < 100; ++i) {
  nums1.push(i);
}

var samenums1 = [];

copy(nums1, samenums1);
nums1[0] = 400;
// console.log(samenums1[0]);


// Concat array
var cisDept = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"];
var dmpDept = ["Raymond", "Cynthia", "Bryan"];

const itDiv = cisDept.concat(dmpDept);
// console.log(itDiv);

const itDiv1 = dmpDept.concat(cisDept);
// console.log(itDiv1);


// Splice array
const itDiv2 = ["Mike","Clayton","Terrill","Raymond","Cynthia","Danny","Jennifer"];

const dmpDept1 = itDiv2.splice(3,3);
const cisDept1 = itDiv2;
// console.log(dmpDept1); 
// console.log(cisDept1); 




// Push Array
var nums = [1,2,3,4,5];
// console.log(nums); 
nums.push(6);
// console.log(nums); 

var copyNums = [1,2,3,4,5];
// console.log(copyNums); 
copyNums[copyNums.length] = 6;
// console.log(copyNums); 



//Unshift Array
var numUnshift = [2,3,4,5];
// console.log(numUnshift); 
var newnum = 1;

numUnshift.unshift(newnum);
// console.log(numUnshift);


// Removing Elemets from Array
// Using pop()
var numPop = [1,2,3,4,5,9];
numPop.pop();
// console.log(numPop); 


// Using shift()
var numShift = [6,1,2,3,4,5];
var first = numShift.shift(); // first gets the value 6
// console.log(first);

numShift.push(first);
// console.log(numShift);


// Sort
function compare(num1, num2) {
  return num1 - num2;
}

var nums = [3,1,2,100,4,200];
nums.sort(compare);
// console.log(nums);


// Reduce
var words = ["the ", "quick ","brown ", "fox "];
var sentence = words.reduce((string, item) => string + item);
// console.log(sentence);

// Map
var words = ["for","your","information"];
var acronym = words.map(item => item[0]);

// console.log(acronym.join(''));


// Two Dimensional Array
Array.matrix = function(numrows, numcols, initial) {
  var arr = [];
  for (var i = 0; i < numrows; ++i) {
    var columns = [];
    for (var j = 0; j < numcols; ++j) {
      columns.push(initial);
    }
    arr.push(columns);
  }
  return arr;
}

var numMatrix = Array.matrix(3, 5, 0);
// console.log(numMatrix);

var names = Array.matrix(3,3,"");
names[1][2] = "Joe";
// console.log(names);


// Accessing by Rows
var grades = [
  [89, 77, 78],
  [76, 82, 81],
  [91, 94, 89],
];

let total = 0;
let studentGrades = [];
let studentAverage = 0.0;


// To calculate each students average
for (var row = 0; row < grades.length; ++row) {
  for (var col = 0; col < grades[row].length; ++col) {
    total += grades[row][col];
  }

  studentAverage = total / grades[row].length;
  studentGrades.push(studentAverage);
  // console.log("Student " + parseInt(row + 1) + " average: " + studentAverage.toFixed(2));

  total = 0;
  average = 0.0;
}

let studentGradesTotal =  studentGrades.reduce((acc, curr) => {
  return acc + curr
}, 0)

let classAverage = studentGradesTotal / studentGrades.length;
// console.log(classAverage.toFixed(2));






// Accessing by Columns

for (var col = 0; col < grades.length; ++col) {
  for (var row = 0; row < grades[col].length; ++row) {
    total += grades[row][col];
  }
  
  average = total / grades[col].length;
  console.log("Test " + parseInt(col + 1) + " average: " + average.toFixed(2));

  total = 0;
  average = 0.0;
}



//  
const print2d = (array) => {
  for (let row = 0; row < array.length; row++) {
    for (let col = 0; col < array[row].length; col++) {
      // console.log(array[row][col]);
    }
  }
}

print2d(grades)

// Making a Matrix array

const matrixArr = (row, col, value) => {
  let matrix = [];

  for (let i = 0; i < row; i++) {
    let matrixRow = [];

    for (let j = 0; j < col; j++) {
     matrixRow.push(value)
    } 

    matrix.push(matrixRow)
  }

  return matrix
}

// console.log(matrixArr(2, 3, null));

