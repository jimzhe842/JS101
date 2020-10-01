const CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
let readline = require('readline-sync');

let humanScore = 0;
let computerScore = 0;

const DECISION_MATRIX = {
  rock: [0,-1,1,-1,1],
  paper: [1,0,-1,1,-1],
  scissors: [-1,1,0,-1,1],
  lizard: [1,-1,1,0,-1],
  spock: [-1,1,-1,1,0],
};

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayResults(outcome) {
  if (outcome === 1) {
    console.log('You win!');
  } else if (outcome === 0) {
    console.log('Tie');
  } else {
    console.log('You lose!');
  }
}

function updateScores(outcome) {
  if (outcome === 1) {
    humanScore++;
  } else if (outcome === -1) {
    computerScore++;
  }
}

while (true) {
  prompt("Welcome to Rock Paper Scissors!");
  prompt("Please choose rock (0) paper (1) or scissors (2)" +
    ", or lizard (3) or spock (4)");
  let intChoice = parseInt(readline.question(),10);

  while (Number.isNaN(intChoice) || intChoice < 0 || intChoice > 4) {
    prompt("Please make a valid number selection!");
    intChoice = parseInt(readline.question(),10);
  }

  let humanChoice = CHOICES[intChoice];
  console.log(`You chose ${intChoice} (${humanChoice})!`);

  console.log('Computer is choosing...');
  let randomInt = Math.floor(Math.random() * 5);
  let computerChoice = CHOICES[randomInt];
  console.log(`Computer chose ${randomInt} (${computerChoice})`);

  let outcome = DECISION_MATRIX[humanChoice][randomInt];
  displayResults(outcome);
  updateScores(outcome);

  console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
  let gameOver = false;
  if (humanScore === 5) {
    console.log("You win!");
    gameOver = true;
  } else if (computerScore === 5) {
    console.log("Computer wins!");
    gameOver = true;
  }

  if (gameOver) {
    prompt("Do you want to play again (y/n)");
    let playAgain = readline.question();
    while (playAgain !== 'y' && playAgain !== 'n') {
      prompt("Please enter a valid response y or n!");
      playAgain = readline.question();
    }
    if (playAgain === 'n') {
      break;
    }
  }
}