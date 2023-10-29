// Create an array map

Array.prototype.myMap = function (cb  ) {
  const returnArray = [];
  for (let i = 0; i < this.length; i++) {
    returnArray[i] = this[i];
  } 
  return returnArray;
};

const arr = [1, 2, 3].myMap(console.log);
const arr2 = ["a", "b", "c"].myMap(console.log);

console.log(arr);
console.log(arr2);


// Why That and not This
Array.prototype.myMap = function (cb  ) {
  const returnArray = [];
  for (let i = 0; i < this.length; i++) {
    returnArray[i] = cb(this[i]); // the callback isnt returnig anything and we sre ccslling the callback
  } 
  return returnArray;
};

const arr3 = [1, 2, 3].myMap(console.log);
const arr4 = ["a", "b", "c"].myMap(console.log);

// console.log(arr);
// console.log(arr2);