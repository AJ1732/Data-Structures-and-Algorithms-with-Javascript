import { PriorityQueue } from "./utils/priority-queue.js";

function topKFrequent(nums, k) {
  if (!Array.isArray(nums)) {
    console.log("Please input a valid array");
    return;
  }
  for (const n of nums) {
    if (typeof n !== "number") {
      console.log("Please input a valid number in nums");
      return;
    }
  }
  if (typeof k !== "number") {
    console.log("Please input a valid number for k");
    return;
  }
  if (k === nums.length) return nums;

  const count = new Map();
  for (const n of nums) {
    count.set(n, (count.get(n) || 0) + 1);
  }

  // Min-heap based on frequency
  const heap = new PriorityQueue((a, b) => count.get(a) - count.get(b));
  console.log(heap.size());

  for (const n of count.keys()) {
    heap.push(n);
    if (heap.size() > k) {
      heap.pop();
    }
  }

  const ans = [];
  while (!heap.isEmpty()) {
    ans.push(heap.pop());
  }
  return ans;
}
const result = topKFrequent([1, 1, 1, 2, 2, 3, 4, 4, 4, 4, 4, 8, 8, 8], 2);
console.log(result);


function topKFrequentBucket(nums, k) {
  // Step 1: Count frequencies
  const count = new Map();
  for (const n of nums) {
    count.set(n, (count.get(n) || 0) + 1);
  }

  // Step 2: Create buckets, freq ranges from 1 to nums.length
  // buckets[i] = array of numbers that appear i times
  const buckets = Array(nums.length + 1).fill(null).map(() => []);

  // Step 3: Fill buckets
  for (const [num, freq] of count.entries()) {
    buckets[freq].push(num);
  }

  // Step 4: Gather top k frequent elements starting from highest freq
  const result = [];
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    for (const num of buckets[i]) {
      result.push(num);
      if (result.length === k) break;
    }
  }

  return result;
}

const resultBucket = topKFrequentBucket([1, 1, 1, 2, 2, 3, 4, 4, 4, 4, 8, 8, 8], 2);
console.log(resultBucket);
