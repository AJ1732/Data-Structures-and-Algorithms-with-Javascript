function codec(strs) {
  if (!Array.isArray(strs)) return false;

  const length = strs.length;
  for (let i = 0; i < length; i++) {
    if (typeof strs[i] === "string") return false;
  }

  return true;
}
