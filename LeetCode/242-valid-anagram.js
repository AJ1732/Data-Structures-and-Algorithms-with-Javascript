function isAnagram(s, t) {
  if (typeof s !== "string" || typeof t !== "string") {
    console.log("Please input valid strings");
    return false;
  }

  if (s.length !== t.length) {
    return false;
  }

  s = s.toLowerCase();
  t = t.toLowerCase();

  const charCounts = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    charCounts[s.charCodeAt(i) - 97]++;
    charCounts[t.charCodeAt(i) - 97]--;
  }

  for (const count of charCounts) {
    if (count !== 0) return false;
  }

  return true;
}

const result = isAnagram("start", "atart");
console.log(result);




// TO CHECK UPPERCASE TOO
function isAnagramUpper(s, t) {
  if (typeof s !== "string" || typeof t !== "string") {
    console.log("Please input valid strings");
    return false;
  }

  if (s.length !== t.length) {
    return false;
  }

  const charCounts = new Array(26).fill(0);

  const normalize = (char) => {
    const code = char.charCodeAt(0);
    if (code >= 65 && code <= 90) {
      return code - 65; // 'A' - 'Z'
    } else if (code >= 97 && code <= 122) {
      return code - 97; // 'a' - 'z'
    } else {
      return -1; // Ignore non-letter
    }
  };

  for (let i = 0; i < s.length; i++) {
    const indexS = normalize(s[i]);
    const indexT = normalize(t[i]);

    if (indexS === -1 || indexT === -1) {
      return false; // invalid character
    }

    charCounts[indexS]++;
    charCounts[indexT]--;
  }

  for (const count of charCounts) {
    if (count !== 0) return false;
  }

  return true;
}
