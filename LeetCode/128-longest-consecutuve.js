const longestConsecutive = (nums) => {
  if (!Array.isArray(nums)) return "Pass an array";

  const length = nums.length;

  if (length === 0) return "Array should not be empty";
  for (let i = 0; i < length; i++) {
    if (typeof nums[i] !== "number") return "All values must be a number";
  }

  const set = new Set(nums);
  let streak = 0;

  for (let n of set) {
    // checking if it is the start of the sequence
    if (!set.has(n - 1)) {
      let runningStreak = 1;
      let current = n;

      // Start running the sequence streak
      while (set.has(current + 1)) {
        current++;
        runningStreak++;
      }

      streak = Math.max(runningStreak, streak);
    }
  }

  return streak;
};

const result = longestConsecutive([3, 4, 7, 1]);
console.log(result);
