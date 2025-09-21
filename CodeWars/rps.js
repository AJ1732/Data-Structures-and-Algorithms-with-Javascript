// Brute Force Solution
const rps = (p1, p2) => {
  const pieces = ["rock", "scissors", "paper"]
  const rules = [
    ["rock", "scissors"],
    ["scissors", "paper"], 
    ["paper", "rock"]
  ];
  
  const p1PieceIndex = pieces.indexOf(p1);
  const roundRule = rules[p1PieceIndex]
  
  if (roundRule.indexOf(p1) < roundRule.indexOf(p2)) return "Player 1 won!";
  if (roundRule.indexOf(p1) > roundRule.indexOf(p2)) return "Player 2 won!";
  
  return "Draw!"
};

// Cleaner Optimized Solution
const rpsOptimized = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  
  const rules = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };
  
  return rules[p1] === p2 ? "Player 1 won!" : "Player 2 won!";
};
