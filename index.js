const X = ["A", "B", "C", "D", "E", "F", "G", "H"];
const Y = [1, 2, 3, 4, 5, 6, 7, 8];

const moveKnight = initPosition => {
  let [x, y] = initPosition.split("");
  x = X.indexOf(x.toUpperCase());
  y = parseInt(y);
  let possibleMoves = [];
  // Check is the coordites of the final position
  // after the move are within the
  // allow values of X and Y
  if (Y.includes(y + 2) && X[x - 1]) {
    // If they are within the limits add these coordinates
    // to the poosibleMoves array
    possibleMoves.push(X[x - 1] + (y + 2));
  }
  if (Y.includes(y + 2) && X[x + 1]) {
    possibleMoves.push(X[x + 1] + (y + 2));
  }
  if (X[x + 2] && Y.includes(y + 1)) {
    possibleMoves.push(X[x + 2] + (y + 1));
  }
  if (X[x + 2] && Y.includes(y - 1)) {
    possibleMoves.push(X[x + 2] + (y - 1));
  }
  if (Y.includes(y - 2) && X[x + 1]) {
    possibleMoves.push(X[x + 1] + (y - 2));
  }
  if (Y.includes(y - 2) && X[x - 1]) {
    possibleMoves.push(X[x - 1] + (y - 2));
  }
  if (X[x - 2] && Y.includes(y - 1)) {
    possibleMoves.push(X[x - 2] + (y - 1));
  }
  if (X[x - 2] && Y.includes(y + 1)) {
    possibleMoves.push(X[x - 2] + (y + 1));
  }
  return possibleMoves.join(" ");
};

const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", () => {
  let inputValue = document.getElementById("startMove").value;
  let possibleMoves = moveKnight(inputValue);
  const results = document.getElementById("results");
  results.innerHTML = possibleMoves;
});
