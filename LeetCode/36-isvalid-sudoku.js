function isValidSudoku(board) {
  if (!Array.isArray(board)) return false;
  for (let i = 0; i < board.length; i++) {
    if (!Array.isArray(board[i]) || board[i].length !== 9) return false;
  }

  const bl = board.length; // board length is the same for the row and col
  const boxCounts = Array.from({ length: 9 }, () => new Set());
  console.log(Array.from(boxCounts.entries()));

  for (let i = 0; i < bl; i++) {
    const rowCount = new Set();
    const colCount = new Set();

    for (let j = 0; j < bl; j++) {
      const rowCell = board[i][j];

      if (rowCell !== ".") {
        // Checking the Row
        if (rowCount.has(rowCell)) return false;
        rowCount.add(rowCell);

        // Box check
        const boxIdx = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        if (boxCounts[boxIdx].has(rowCell)) return false;
        boxCounts[boxIdx].add(rowCell);
      }

      // Checking the Col
      const colCell = board[j][i];
      if (colCell !== ".") {
        if (colCount.has(colCell)) return false;
        colCount.add(colCell);
      }
    }
  }

  return true;
}

const result = isValidSudoku([
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]);
const result2 = isValidSudoku([
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]);

console.log(result);
console.log(result2);
