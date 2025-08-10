function checkValid(matrix) {
  if (!Array.isArray(matrix) || matrix.length === 0) return false;

  const n = matrix.length;
  const expectedLength = matrix[0].length;

  for (let i = 0; i < n; i++) {
    if (!Array.isArray(matrix[i]) || matrix[i].length !== expectedLength)
      return false;

    const rowSet = new Set();
    const colSet = new Set();

    for (let j = 0; j < expectedLength; j++) {
      const rowCell = matrix[i][j];
      const colCell = matrix[j][i];

      if (rowSet.has(rowCell)) return false;
      rowSet.add(rowCell);

      if (colSet.has(colCell)) return false;
      colSet.add(colCell);

      // console.log(`Cell ${j} of Row ${i}:`, rowCell);
      // console.log(`Cell ${j} of Col ${i}:`, colCell);
    }
  }

  return true;
}

const result = checkValid([
  [1, 2, 3],
  [3, 1, 2],
  [2, 3, 1],
]);
// const result2 = checkValid([
//   [1, 1, 1],
//   [1, 2, 3],
//   [1, 2, 3],
// ]);
console.log(result);
// console.log(result2);
