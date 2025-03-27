// Need 4 information for a binary search

// The Array (sorted)
// The Start of the array index
// The End of the array index
// The Target

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let start = 0;
let end = arr.length - 1;
let target = 8;

const sortedArray = arr.sort((a, b) => a - b);

function binarySearch(arr, start, end, target) {
  if (start > end) {
    return -1;
  }

  let midIndex = Math.floor((start + end) / 2);
  let mid = arr[midIndex];

  if (mid === target) {
    return { target: mid, index: midIndex };
  }

  if (mid > target) {
    return binarySearch(arr, start, midIndex - 1, target);
  } else {
    return binarySearch(arr, midIndex + 1, end, target);
  }
}

console.log("====================================");
console.log(binarySearch(arr, start, end, target));
console.log("====================================");

function binarySearchOrigin(arr, target) {
  // Check if all elements in the array are of the same type
  const firstType = typeof arr[0];
  const allSameType = arr.every((item) => typeof item === firstType);

  if (!allSameType) {
    return "Cannot perform search: Array contains elements of different types.";
  }

  const originalArrayWithIndices = arr.map((value, index) => ({
    value,
    index,
  }));

  // Sorting function based on type (number or string)
  const sortedArrayWithIndices = originalArrayWithIndices.sort((a, b) => {
    if (typeof a.value === "number" && typeof b.value === "number") {
      return a.value - b.value; // Sort numbers
    } else if (typeof a.value === "string" && typeof b.value === "string") {
      return a.value.localeCompare(b.value); // Sort strings
    }
  });

  let start = 0;
  let end = sortedArrayWithIndices.length - 1;

  // Binary search loop
  while (start <= end) {
    const midIndex = Math.floor((start + end) / 2);
    const mid = sortedArrayWithIndices[midIndex].value;

    if (mid === target) {
      // Return the original index if the target is found
      return sortedArrayWithIndices[midIndex].index;
    }

    if (mid < target) {
      start = midIndex + 1;
    } else {
      end = midIndex - 1;
    }
  }

  // Return -1 if target is not found
  return -1;
}

function logSearchResult(arr, index, target) {
  if (index !== -1) {
    console.log(`Target '${arr[index]}' found at index: ${index}`);
  } else {
    console.log(`Target '${target}' not found.`);
  }
}

const arr2 = [5, 3, 8, 1, 2];
const target2 = 3;

const originalIndex = binarySearchOrigin(arr2, target2);
logSearchResult(arr2, originalIndex, target);

const arr3 = ["apple", "banana", "cherry", "date", "fig", "grape"];
const target3 = "cherry";

const originalIndex2 = binarySearchOrigin(arr3, target3);
logSearchResult(arr3, originalIndex2, target3);
