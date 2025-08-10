function productExceptSelf(nums) {
  if (!Array.isArray(nums)) {
    console.log("Please input a valid array");
    return;
  }

  const n = nums.length;
  let result = new Array(n).fill(1);
  let pre = 1;
  let post = 1;

  for (let i = 0; i < n; i++) {
    result[i] = pre;
    pre *= nums[i];
  }

  for (let i = n - 1; i >= 0; i--) {
    result[i] *= post;
    post *= nums[i];
  }

  return result;
}

const result = productExceptSelf([1, 2, 3, 4]);
const result2 = productExceptSelf([-1, 1, 0, -3, 3]);
console.log(result);
console.log(result2);
