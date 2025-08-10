function twoSum(nums, target) {
  let store = {}; // Hash map storing the complacent as the key and it's index as the value
  for (let [
    index,
    num,
  ] of nums.entries() /* .entries() turns it into and object of arrays of the [index, value] */) {
    if (store[num] !== undefined) return [store[num], index];
    store[target - num] = index;
  }
}

const result = twoSum([3, 7, 11, 6, 2, 15], 9);
console.log(result);

function twoSumImproved(nums, target) {
  if (!Array.isArray(nums)) {
    console.log("Please input a valid array for nums");
    return;
  }
  if (typeof target !== "number") {
    console.log("Please input a valid number for target");
    return;
  }

  let store = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (store.has(complement)) return [store.get(complement), i];
    store.set(nums[i], i);
  }

  return "no match";
}

const result2 = twoSumImproved([3, 7, 11, 2, 15], 9);
console.log(result2);
