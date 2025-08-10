function threeSum(nums) {
  if (!Array.isArray(nums)) {
    console.log("Please input a valid array");
    return;
  }
  let [solution, left, right] = [[], 0, nums.length - 1];
  if (nums.length < 3) return solution;

  // Step 1: Sort the array
  nums.sort((a, b) => a - b);

  //
  for (let [index, value] of nums.entries()) {
    if (value > 0) return solution;
    if (value === nums[index - 1]) continue;

    left = index + 1;
    right = nums.length - 1;
    let temp = 0;

    while (left < right) {
      temp = value + nums[left] + nums[right];
      if (temp === 0) {
        solution.push([value, nums[left], nums[right]]);
        left++;
        right--;

        while (left < right && nums[left] == nums[left - 1]) {
          left++;
        }
        while (left < right && nums[right] == nums[right + 1]) {
          right--;
        }
      } else if (temp > 0) {
        right--;
      } else if (temp < 0) {
        left++;
      }
    }
  }
  return solution;
}

const answer = threeSum([-1, 0, 1, 2, -1, -4]);
console.log(answer);
