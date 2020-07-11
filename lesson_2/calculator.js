// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');
const CURR_LANGUAGE = "en";

function translatedMessage(message, language="en"){
  return MESSAGES[language][message];
}

function prompt(message) {
  console.log(`=> ${translatedMessage(message, CURR_LANGUAGE)}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

let answer;

do {
  prompt("welcome");

  prompt("firstNumber");
  let number1 = readline.question();
  
  while (invalidNumber(number1)) {
    prompt("errorMessage");
    number1 = readline.question();
  }
  
  prompt("secondNumber");
  let number2 = readline.question();
  
  while (invalidNumber(number2)) {
    prompt("errorMessage");
    number2 = readline.question();
  }
  
  prompt("menuOptions");
  let operation = readline.question();
  
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt("menuBriefOptions");
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
  prompt("result");
  console.log(output);

  prompt("anotherCalculation");
  answer = readline.question();

  } while (answer === 'y');
  


