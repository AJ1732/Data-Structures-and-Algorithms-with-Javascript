// Recursive Binary Search
// This returns a boolean (true or false), i.e. if the key exists in the array.

const recursiveBinarySearch = (array, key) => {
  if (array.length == 0) {
    return false;
  } else {
    const mid = Math.floor(array.length/2);

    if (array[mid] === key) {
      return true;
    } else if (array[mid] < key) {
        return recursiveBinarySearch(array.slice(mid + 1), key);
      } else if (array[mid] > key) {
        return recursiveBinarySearch(array.slice(0, mid), key);
      } return
    }
}

//why do i need to increment mid when array[mid] < key

const verify = (boolean) => {
  console.log(`Target found: ${boolean}`);
}

const empty = []; 
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];


const result = recursiveBinarySearch(numbers, 12);
verify(result);