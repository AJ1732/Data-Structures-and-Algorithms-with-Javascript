Yes, it is possible to implement a binary search on a sorted array and return the index of the target in the original unsorted array. To achieve this, you can maintain a mapping between the original array and the sorted array, then use that mapping to find the original index of the target after performing the binary search on the sorted array.

Here's how you can do it:

### Approach:
1. First, create a mapping of the original array, where each element is stored along with its index.
2. Sort this mapped array based on the element values.
3. Perform binary search on the sorted version of the array.
4. Once the target is found, return the corresponding original index using the mapping.

### Code Implementation:

```javascript
function binarySearch(arr, target) {
  // Step 1: Create a mapping of elements and their original indices
  const originalArrayWithIndices = arr.map((value, index) => ({ value, index }));

  // Step 2: Sort the array by values, but keep the original indices intact
  const sortedArrayWithIndices = originalArrayWithIndices.sort((a, b) => a.value - b.value);

  // Step 3: Perform binary search on the sorted array
  let start = 0;
  let end = sortedArrayWithIndices.length - 1;

  while (start <= end) {
    const midIndex = Math.floor((start + end) / 2);
    const mid = sortedArrayWithIndices[midIndex].value;

    if (mid === target) {
      // Step 4: Return the original index of the found target
      return sortedArrayWithIndices[midIndex].index;
    }

    if (mid < target) {
      start = midIndex + 1;
    } else {
      end = midIndex - 1;
    }
  }

  // Return -1 if the target is not found
  return -1;
}

// Example usage
const arr = [40, 100, 1, 5, 25, 10];
const target = 25;
const originalIndex = binarySearch(arr, target);
console.log(`Target found at original index: ${originalIndex}`);
// Output: Target found at original index: 4
```

### Explanation:
- The `originalArrayWithIndices` stores each element of the array along with its original index, like this:
  ```javascript
  [
    { value: 40, index: 0 },
    { value: 100, index: 1 },
    { value: 1, index: 2 },
    { value: 5, index: 3 },
    { value: 25, index: 4 },
    { value: 10, index: 5 }
  ]
  ```

- After sorting this array by `value`, it becomes:
  ```javascript
  [
    { value: 1, index: 2 },
    { value: 5, index: 3 },
    { value: 10, index: 5 },
    { value: 25, index: 4 },
    { value: 40, index: 0 },
    { value: 100, index: 1 }
  ]
  ```

- A binary search is performed on the sorted array, but the original index of the element is preserved. When the target is found, the original index is returned.

This way, the index returned corresponds to the target's position in the unsorted array, while using a binary search on the sorted version.