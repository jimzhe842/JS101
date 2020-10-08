let readline = require('readline-sync');
let values = {
  Ace: 11,
  Jack: 10,
  Queen: 10,
  King: 10
};
let playerScore = 0;
let dealerScore = 0;

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
}

function initializeDeck() {
  let cards = 'Ace 1 2 3 4 5 6 7 8 9 10 Jack Queen King'.split(' ');
  let deck = [];

  for (let index in cards) {
    let card = cards[index];
    if (!Number.isNaN(Number(card))) {
      card = Number(card);
    }
    for (let rep = 0; rep <= 4; rep++) {
      deck.push(card);
    }
  }

  shuffle(deck);
  return deck;
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function dealCards(deck,userArr, repeat) {
  for (let rep = 0; rep < repeat; rep++) {
    let randomIndex = Math.floor(Math.random() * deck.length);
    let randomCard = deck.splice(randomIndex, 1)[0];
    userArr.push(randomCard); // Just pop the last value!
  }
}

function displayCards(player,dealer) {
  console.log(' ');
  console.log(`Dealer has ${joinAnd(dealer.slice(1), ',', '')} and unknown card`);
  console.log(`You have: ${joinAnd(player)}`);
}

function displayAllCards(player,dealer) {
  console.log(' ');
  console.log(`Dealer has ${joinAnd(dealer)}`);
  console.log(`You have: ${joinAnd(player)}`);
}

function joinAnd(arr, delimiter = ',', word = 'and') {
  if (arr.length <= 2) {
    return arr.join(` ${word} `);
  } else {
    return arr.slice(0, arr.length - 1).join(`${delimiter} `).concat(`${delimiter} ${word} ${arr[arr.length - 1]}`);
  }
}

function getSum(userArr) {
  let aces = userArr.filter(card => card === 'Ace').length;

  let convertedArr = userArr.map(card => {
    if (typeof card === "string") {
      card = values[card];
    }
    return card;
  });

  let sum = convertedArr.reduce((sum, value) => sum + value, 0);
  while (sum > 21 && aces > 0) {
    sum -= 10;
    aces--;
  }
  // console.log(sum);
  return sum;
}


function displayResults(playerSum,dealerSum) {
  console.log("============");
  console.log(`Player's total is ${playerSum}`);
  console.log(`Dealer's total is ${dealerSum}`);
  console.log("============");

  if (playerSum > 21) {
    console.log("Player has bust. Dealer wins!");
  } else if (dealerSum > 21) {
    console.log("Dealer has bust. Player wins!");
  } else if (playerSum > dealerSum) {
    console.log("Player wins!");
  } else if (playerSum < dealerSum) {
    console.log("Dealer wins!");
  } else {
    console.log("Tie!");
  }
}

function incrementScore(playerSum,dealerSum) {
  if (playerSum > 21) {
    dealerScore++;
  } else if (dealerSum > 21) {
    playerScore++;
  } else if (playerSum > dealerSum) {
    playerScore++;
  } else {
    dealerScore++;
  }
}


while (true) {
  let player = [];
  let dealer = [];
  let playerSum = 0;
  let dealerSum = 0;
  let deck = initializeDeck();

  dealCards(deck,player,2);
  dealCards(deck,dealer,2);
  displayCards(player,dealer);

  while (true) {

    prompt("Do you want to hit or stay? (h/s)");
    let response = readline.question();
    while (!'hs'.includes(response[0].toLowerCase())) {
      prompt("Please make a valid choice (h/s)");
      response = readline.question();
    }
    if (response === 's') {
      playerSum = getSum(player);
      break;
    }
    
    dealCards(deck,player,1);
    displayCards(player,dealer);
    playerSum = getSum(player);
    
    if (playerSum > 21) {
      displayAllCards(player,dealer);
      displayResults(playerSum,dealerSum);
      incrementScore(playerSum,dealerSum);
      break;
    }
  }

  if (playerSum <= 21) {
    while (true) {
      dealerSum = getSum(dealer);
      if (dealerSum >= 17) {
        break;
      }
      dealCards(deck,dealer,1);
      console.log(`Dealer decided to hit! Cards: ${joinAnd(dealer)}`);
    }

    displayAllCards(player,dealer);
    displayResults(playerSum, dealerSum);
    incrementScore(playerSum,dealerSum);
  }

  console.log(' ');
  console.log(`Current Scores: Player ${playerScore} - Dealer ${dealerScore}`);

  if (playerScore >= 5 || dealerScore >= 5) {
    if (playerScore >= 5) {
      console.log("Player wins!");
    } else if (dealerScore >= 5) {
      console.log("Dealer wins!");
    }

    prompt("Do you want to play again (y/n)");
    let playAgain = readline.question();
    while (!'yn'.includes(playAgain[0].toLowerCase())) {
      prompt("Please choose a valid response (y/n)");
      playAgain = readline.question();
    }

    if (playAgain === 'n') break;
  }
}

// Fix the play again;