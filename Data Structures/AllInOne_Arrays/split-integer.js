export const splitInteger = (int) => {
  if (typeof int !== "number") {
    return -1;
  }

  const digits = [];

  while (int > 0) {
    digits.unshift(int % 10);
    int = Math.floor(int / 10);
  }

  return digits;
};