function containsDuplicate(nums) {
  if (!Array.isArray(nums)) {
    console.log("Please input a valid array");
    return;
  }

  const numsSet = new Set();

  for (const num of nums) {
    if (numsSet.has(num)) return true;
    numsSet.add(num);
  }

  return false;
}

const result = containsDuplicate([3, 4, 7, 1]);
console.log(result);
