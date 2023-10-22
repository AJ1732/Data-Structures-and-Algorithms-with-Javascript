// Binary Search
// This returns the position(i.e. the index) of the key in the array
const binarySearch = (array, key) => {
  let left = 0;
  let right = array.length - 1;

  while(left <= right) {
    const mid = Math.floor((left + right)/2);

    if (array[mid] === key) {
      return mid;
    } else if (array[mid] < key) {
      left = mid + 1;
    } else {
      right = mid - 1;
    } 
  }

  return -1
}

//The code given in the tutorial
function binarySearch2(array, key) {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      if (array[mid] === key) {
          return mid;
      }
      if (array[mid] < key) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }
  return -1;
}


const verify = (index) => {
  if (index !== -1) {
    console.log(`Target found at index ${index}`)
  } else {
    console.log(`Target not found`)
  }
}

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8]
const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
const sortedMonth = month.sort();

const result = binarySearch(sortedMonth, "Nov")
console.log(sortedMonth);
verify(result);
