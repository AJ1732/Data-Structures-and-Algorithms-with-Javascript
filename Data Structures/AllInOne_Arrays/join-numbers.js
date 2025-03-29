export const joinNumbers = (arr) => {
  if (!Array.isArray(arr)) {
    return -1;
  }

  let result = 0;

  for (const num of arr) {
    result = result * 10 + num;
  }

  return result;
};
