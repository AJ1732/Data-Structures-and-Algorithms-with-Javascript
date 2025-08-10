function groupAnagrams(strs) {
  if (!Array.isArray(strs)) {
    console.log("Please input a valid array");
    return;
  }

  const ansMap = new Map();

  for (const s of strs) {
    const count = new Array(26).fill(0);
    for (const c of s) {
      count[c.charCodeAt(0) - 97]++;
    }

    const key = count.join("#");

    if (!ansMap.has(key)) {
      ansMap.set(key, []);
    }
    ansMap.get(key).push(s);
  }
  return Array.from(ansMap.values());
}

const result = groupAnagrams(["eat","tea","tan","ate","nat","bat"]);
console.log(result);
