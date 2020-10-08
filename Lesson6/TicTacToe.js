let readline = require('readline-sync');
let HUMAN_MOVE = 'O';
let COMPUTER_MOVE = 'X';

let threeInARows = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ]

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayBoard(arr) {
  console.log(`+-+-+-+`);
  console.log(`|${arr[0]}|${arr[1]}|${arr[2]}|`);
  console.log(`+-+-+-+`);
  console.log(`|${arr[3]}|${arr[4]}|${arr[5]}|`);
  console.log(`+-+-+-+`);
  console.log(`|${arr[6]}|${arr[7]}|${arr[8]}|`);
  console.log(`+-+-+-+`);
}

function checkWinner(arr) {
  
  for (let i = 0; i < threeInARows.length; i++) {
    let humanWin = threeInARows[i].every(index => arr[index] === HUMAN_MOVE);
    if (humanWin) {
      return "Human";
    }
    let computerWin = threeInARows[i].every(index => arr[index] === COMPUTER_MOVE);
    if (computerWin) {
      return "Computer";
    }
  }
  if (!arr.some(move => move === ' ')) {
    return "No one";
  }
  return false;
}

function joinOr(arr, delimiter = ',', word = 'or') {
  if (arr.length <= 2) {
    return arr.join(` ${word} `);
  } else {
    return arr.slice(0, arr.length - 1).join(`${delimiter} `).concat(`${delimiter} ${word} ${arr[arr.length - 1]}`);
  }
}

function getComputerMove(boardArr) {
  for (let i = 0; i < threeInARows.length; i++) { // Offensive
    let mapping = threeInARows[i].map(index => boardArr[index]);
    // console.log(threeInARows[i]);
    // console.log(mapping);
    if (mapping.filter(move => move === ' ').length === 1) { // Only interested in the three in a row patterns with one empty square;
      if ((mapping.filter(move => move === COMPUTER_MOVE).length === 2)) {
        // console.log("Computer move");
        // console.log(mapping);
        // console.log(threeInARows[i][mapping.indexOf(' ')]);
        return threeInARows[i][mapping.indexOf(' ')] + 1; // Returns the index position of the move; Need to add 1 since scaling;
      }
      // else if  {
      //   return threeinARows[mapping.indexOf(' ')];
      // }
    }
  }

  for (let i = 0; i < threeInARows.length; i++) { // Defensive
    let mapping = threeInARows[i].map(index => boardArr[index]);
    if (mapping.filter(move => move === ' ').length === 1) {
      if (mapping.filter(move => move === HUMAN_MOVE).length === 2) {
        return threeInARows[i][mapping.indexOf(' ')] + 1;
      }
    }
  }


  // console.log(boardArr);
  if (boardArr[4] === ' ') {
    return 5;
  }
  return false;
}

// console.log(joinOr([1,2]));
// console.log(joinOr([1,2,3]));
// console.log(joinOr([1,2,3],';'));
// console.log(joinOr([1,2,3],',','and'));

while (true) {
  let humanScore = 0;
  let computerScore = 0;
  prompt('Who will go first? Human (h) or Computer (c)');
  let firstPlayer = readline.question();
  while (!'hc'.includes(firstPlayer[0].toLowerCase())) {
    prompt('Please choose a valid response h or c!');
    firstPlayer = readline.question();
  }
  

  function incrementScore(winner) {
    if (winner === 'Human') {
      humanScore++;
    } else if (winner === 'Computer') {
      computerScore++;
    }
  }

  while (true) {
    console.log(' ');
    let boardArr = [];
    boardArr.length = 9;
    boardArr.fill(' ', 0, 9);
    let availableSquares = [1,2,3,4,5,6,7,8,9];

    function computerMove() {
      console.log(' ');
      console.log("Computer is making a move...");
      let computerMove = getComputerMove(boardArr) || availableSquares[Math.floor(Math.random() * availableSquares.length)];
      console.log(`Computer has chosen square ${computerMove}!`);
      boardArr[computerMove - 1] = COMPUTER_MOVE; // Need to adjust the index;
      availableSquares.splice(availableSquares.indexOf(computerMove),1);
    }

    function humanMove() {
      prompt(`It's your turn! Please pick an empty square ${joinOr(availableSquares)}`);
      let response = Number(readline.question());
      while (!availableSquares.includes(response[0].toLowerCase())) {
        prompt(`Please choose a proper, empty square ${joinOr(availableSquares)}`);
        response = Number(readline.question());
      }
      boardArr[response - 1] = HUMAN_MOVE; // Need to adjust the index;
      availableSquares.splice(availableSquares.indexOf(response),1);
    }
    function alternatePlayer(currentPlayer) {
      currentPlayer === 'h' ? humanMove() : computerMove();
    }
    // if (firstPlayer === 'c') {
    //   computerMove();
    // }
    let currentPlayer = firstPlayer;

    while (true) {
      displayBoard(boardArr);
      alternatePlayer(currentPlayer);
      currentPlayer = currentPlayer === 'h' ? 'c' : 'h';
      let winner = checkWinner(boardArr);
      if (winner) {
        incrementScore(winner);
        console.log(`${winner} has won!`);
        break;
      }
      
      // humanMove();

      

      // winner = checkWinner(boardArr);
      // if (winner) {
      //   incrementScore(winner);
      //   console.log(`${winner} has won!`);
      //   break;
      // }

      // computerMove();
    }


    firstPlayer = firstPlayer === 'h' ? 'c' : 'h';

    console.log(`Scores: Human-Computer, ${humanScore}-${computerScore}`);
    if (humanScore >= 5) {
      console.log("Human has won the game!");
      break;
    } else if (computerScore >= 5) {
      console.log("Computer has won the game!");
      break;
    }
  }

  prompt("Do you want to play again (y/n)");
  let playAgain = readline.question();
  while (!'yn'.includes(playAgain[0].toLowerCase())) {
    prompt("Please choose a valid response (y/n)");
    playAgain = readline.question();
  }

  if (playAgain === 'n') break;
}