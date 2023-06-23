//const prompt = require("prompt-sync")({sigint: true});
// const age = prompt ("please insert your age ");
// if (age > 18) {
//     console.log ("you are welcome to the lakers")
//  } else {
//      console.log ('go home to your mama')
//  }

// let sum = 44;
// const greet = 'Hello';
// const name = 'Jack';
// console.log(greet + ' ' + name);

// const prompt = require("prompt-sync")({sigint: true});
// let result;

// const operator = prompt('Enter operator (either +, -, * or /): ');
// const number1 = parseFloat(prompt('Enter first number: '));
// const number2 = parseFloat(prompt('Enter second number: '));

// switch (operator) {
//   case '+':
//     result = number1 + number2;
//     console.log(`${number1} + ${number2} = ${result}`);
//     break;
//   case '-':
//     result = number1 - number2;
//     console.log(`${number1} - ${number2} = ${result}`);
//     break;
//   case '*':
//     result = number1 * number2;
//     console.log(`${number1} * ${number2} = ${result}`);
//     break;
//   case '/':
//     result = number1 / number2;
//     console.log(`${number1} / ${number2} = ${result}`);
//     break;
//   default:
//     console.log('Invalid operator');
//     break;
// }

const prompt = require("prompt-sync")({sigint: true});


// let result;
// const operator = prompt('Enter your operator( either +, -, *, or /): ');
// const number1 = parseFloat(prompt('Enter first number: '));
// const number2 = parseFloat(prompt('Enter second number: '));

// switch(operator) {

//     case '+':
//     result = number1 + number2;
//     console.log(`${number1} + ${number2} = ${result}`);
//     break;
   
//     case '-':
//     result = number1 - number2;
//     console.log(`${number1} - ${number2} = ${result}`);
//     break;

//     case '*':
//     result = number1 * number2;
//     console.log(`${number1} * ${number2} = ${result}`);
//     break;

//     case '/':
//     result = number1 / number2;
//     console.log(`${number1} / ${number2} = ${result}`);
//     break;

//     default :
//         console.log("Invalid operator");
// }

// let sum = 44;
// console.log(sum);

const number = prompt("Enter a number: ");

// check if number is greater than 0
if (number > 0) {
 // the body of the if statement
  console.log("The number is positive");
}

console.log("The if statement is easy");