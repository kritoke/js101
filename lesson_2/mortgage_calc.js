// get loan amount, APR, and loan duration from the user
// calculate monthly interest rate
// calculation loan duration in months
// use let m = p * (j / (1 - Math.pow((1 + j),
// (-n)))); to calculate the final number

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt("What is the loan amount?");
let loanAmount = readline.question();

prompt("What is the APR of the loan?");
let apr = readline.question() / 100;

let monthlyInterestRate = apr / 12;

prompt("What is the loan duration in months?");
let loanDuration = readline.question();

let monthlyPayment =
  (loanAmount * (monthlyInterestRate /
    (1 - Math.pow((1 + monthlyInterestRate), (-loanDuration))))).toFixed(2);

prompt(`The monthly payment is $${monthlyPayment}`);