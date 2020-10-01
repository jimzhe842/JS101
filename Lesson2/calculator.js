let readline = require('readline-sync');
const LANG = "en-us";
const INFO = require('./calculator_messages.json');
const MESSAGES = INFO[LANG];

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}
while (true) {
  prompt(MESSAGES.welcome);

  prompt(MESSAGES.firstNumber);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(MESSAGES.notValid);
    number1 = readline.question();
  }

  prompt(MESSAGES.secondNumber);
  let number2 = readline.question();
  while (invalidNumber(number2)) {
    prompt(MESSAGES.notValid);
    number2 = readline.question();
  }

  console.log(`${number1} ${number2}`);

  console.log(MESSAGES.whichOperation);
  let operation = readline.question();
  while (!['1','2','3','4'].includes(operation)) {
    prompt(MESSAGES.chooseOperation);
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  console.log(`The result is ${output}`);
  prompt(MESSAGES.anotherCalculation);
  let calculate = readline.question();

  if (calculate !== 'y') {
    return;
  }
}

// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.