// brute force
function removeExclamationMarks(s) {
  return s.split("").map(c => (c === "!" ? "" : c)).join("")
}

// optimized solution
function removeExclamationMarks2(s) {
  return s.split('!').join('');
}

function removeExclamationMarks3(s) {
  return s.replace(/!/g, '');
}

