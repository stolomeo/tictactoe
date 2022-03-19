//gameBoard []'s indexes will be correlated with the id of each clicked element

const squares = document.querySelectorAll(".square");

let currentPlayer = "X";

const gamePlay = (() => {
  let gameBoard = [];
  for (let i = 0; i < squares.length; i++) {
    gameBoard.push("");
  }

  const getGameBoard = () => gameBoard;
  const handleClick = (e) => {
    gameBoardID = e.target.id;

    updateGameBoard(gameBoardID);

    placeMark();
  };
  const updateGameBoard = () => {
    gameBoard[gameBoardID] = "X";
  };

  const placeMark = () => {
    squares.forEach((square) => (square.textContent = "X"));
  };
  return {
    getGameBoard,
    handleClick,
    updateGameBoard,
    placeMark,
  };
})();

squares.forEach((square) => {
  square.addEventListener("click", gamePlay.handleClick);
});
