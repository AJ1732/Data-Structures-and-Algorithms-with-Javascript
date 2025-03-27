import { isMainModule } from "../utils/is-main-module.js";

const twoSum = (arr, target) => {
  if (!Array.isArray(arr) || typeof target !== "number") {
    return -1;
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === target && i < j) {
        return [i, j];
      }
    }
  }

  return false;
};

if (isMainModule(import.meta.url)) {
  console.log(twoSum([7, 1, 5, 3, 6, 4, 6], 4));
}
