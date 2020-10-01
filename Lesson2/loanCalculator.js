let readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function calculateMonthly(principal,monthly,months) {
  return principal * (monthly / (1 - Math.pow((1 + monthly), (-months))));
}

while (true) {
  prompt("Welcome to loan calculator");
  prompt("What is your loan amount");
  let loanAmount = parseFloat(readline.question());
  while (Number.isNaN(loanAmount) || loanAmount < 0) {
    prompt("Please enter a positive number");
    loanAmount = parseFloat(readline.question());
  }

  prompt("What is your APR (in percentage)");
  let apr = parseFloat(readline.question());
  while (Number.isNaN(apr) || apr < 0) {
    prompt("Please enter a non-negative number");
    apr = parseFloat(readline.question());
  }

  prompt("What is your loan duration" +
    "(in years will be converted to months and rounded up)");
  let loanDuration = parseFloat(readline.question());
  while (Number.isNaN(loanDuration) || loanDuration <= 0) {
    prompt("Please enter a positive number");
    loanDuration = parseFloat(readline.question());
  }

  let monthlyRateDecimal = apr / 1200;
  let loanDurationMonths = Math.ceil(loanDuration * 12);
  let monthlyPayment;
  if (monthlyRateDecimal === 0) {
    monthlyPayment = loanAmount / loanDurationMonths;
  } else {
    monthlyPayment = calculateMonthly(loanAmount,
      monthlyRateDecimal,loanDurationMonths);
  }
  console.log(`Your monthly payments are $${monthlyPayment.toFixed(2)}`);

  prompt("Make another calculation? (y/n)");
  let response = readline.question();
  while (response !== 'y' && response !== 'n') {
    prompt("Please either input y or n!");
    response = readline.question();
  }
  if (response === 'n') {
    break;
  }
}