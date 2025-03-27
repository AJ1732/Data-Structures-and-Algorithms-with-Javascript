function logNFuncRecursive(n) {
  if (n <= 1) return "Done";
  n = Math.floor(n / 2);
  return logNFuncRecursive(n);
}

function logNFuncIterative(n) {
  while (n > 1) {
    n = Math.floor(n / 2);
  }
}
