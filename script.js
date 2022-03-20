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

  const checkResult = () => {
    if (gameboard[0] == "X" && gameboard[1] == "X" && gameboard[2] == "X") {
    }

    if (gameboard[0] == "O" && gameboard[1] == "O" && gameboard[2] == "O") {
    }

    if (gameboard[3] == "X" && gameboard[4] == "X" && gameboard[5] == "X") {
    }

    if (gameboard[3] == "O" && gameboard[4] == "O" && gameboard[5] == "O") {
    }

    if (gameboard[6] == "X" && gameboard[7] == "X" && gameboard[8] == "X") {
    }

    if (gameboard[6] == "O" && gameboard[7] == "O" && gameboard[8] == "O") {
    }

    if (gameboard[0] == "X" && gameboard[3] == "X" && gameboard[6] == "X") {
    }

    if (gameboard[0] == "O" && gameboard[3] == "O" && gameboard[6] == "O") {
    }

    if (gameboard[1] == "X" && gameboard[4] == "X" && gameboard[7] == "X") {
    }

    if (gameboard[1] == "O" && gameboard[4] == "O" && gameboard[7] == "O") {
    }

    if (gameboard[2] == "X" && gameboard[5] == "X" && gameboard[8] == "X") {
    }

    if (gameboard[2] == "O" && gameboard[5] == "O" && gameboard[8] == "O") {
    }
    if (gameboard[0] == "X" && gameboard[4] == "X" && gameboard[8] == "X") {
    }
    if (gameboard[0] == "O" && gameboard[4] == "O" && gameboard[8] == "O") {
    }
    if (gameboard[2] == "X" && gameboard[4] == "X" && gameboard[6] == "X") {
    }
    if (gameboard[2] == "O" && gameboard[4] == "O" && gameboard[6] == "O") {
    }
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

  const endGame = () => {};

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
