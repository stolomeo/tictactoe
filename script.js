const squares = document.querySelectorAll(".square");
let currentTurn;

const gameBoard = (() => {
  let gameBoard = [];
  for (let i = 0; i < squares.length; i++) {
    gameBoard.push("");
  }

  const getGameBoard = () => gameBoard;

  const updateGameBoard = () => {
    gameBoard[gameBoardID] = currentTurn;
  };

  return {
    getGameBoard,
    updateGameBoard,
  };
})();

const displayController = (() => {
  const handleClick = (e) => {
    square = e.target;
    gameBoardID = e.target.id;
    gameController.determineTurn();
    gameBoard.updateGameBoard(gameBoardID);
    gameController.placeMark(square, [currentTurn]);
    gameController.swapTurns();
    updatePlayerDisplay();
  };
  const updatePlayerDisplay = () => {
    const playerDisplay = document.querySelector("span");

    if (currentTurn == undefined) {
      playerDisplay.textContent = `${playerOne.name}'s Turn!`;
    } else if (currentTurn == "X") {
      playerDisplay.textContent = `${playerTwo.name}'s Turn!`;
    } else if (currentTurn == "O") {
      playerDisplay.textContent = `${playerOne.name}'s Turn!`;
    }
  };

  return {
    handleClick,
    updatePlayerDisplay,
  };
})();

const gameController = (() => {
  let playerTwoTurn;
  const determineTurn = () => {
    currentTurn = playerTwoTurn ? playerTwo.mark : playerOne.mark;
  };
  const swapTurns = () => {
    playerTwoTurn = !playerTwoTurn;
  };

  const placeMark = (square, currentTurn) => {
    square.textContent = currentTurn;
  };

  return {
    determineTurn,
    swapTurns,
    placeMark,
  };
})();

squares.forEach((square) => {
  square.addEventListener("click", displayController.handleClick, {
    once: true,
  });
});

const playerFactory = (name, mark) => {
  return {
    name,
    mark,
  };
};

let playerOne = playerFactory("Player One", "X");
let playerTwo = playerFactory("Player Two", "O");

displayController.updatePlayerDisplay();
