// get loan amount, APR, and loan duration from the user
// calculate monthly interest rate
// calculation loan duration in months
// use let m = p * (j / (1 - Math.pow((1 + j),
// (-n)))); to calculate the final number

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number)) || Number(number) < 0;
}

prompt("What is the loan amount?");
let loanAmount = readline.question();
while (invalidNumber(loanAmount))
{
  prompt("Number must be valid, please enter a new loan amount.")
  loanAmount = readline.question();
}

prompt("What is the APR of the loan? (i.e. 10 for 10%)");
let apr = readline.question();
while (invalidNumber(apr))
{
  prompt("Number must be valid, please enter a new APR.")
  apr = readline.question();
}

let monthlyInterestRate = (apr / 100) / 12;

prompt("What is the loan duration in months?");
let monthlyDuration = readline.question();
while (invalidNumber(monthlyDuration))
{
  prompt("Number must be valid, please enter a new monthly duration.")
  monthlyDuration = readline.question();
}

let monthlyPayment =
  (loanAmount * (monthlyInterestRate /
    (1 - Math.pow((1 + monthlyInterestRate), (-monthlyDuration))))).toFixed(2);

prompt(`The monthly payment is $${monthlyPayment}`);