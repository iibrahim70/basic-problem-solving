// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built -in reverse() method. 

const string = 'Hello World';
const reversedString = string.split('').reverse().join('');
// console.log(reversedString);


// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

const numbers = [2, -5, 10, -3, 7]
const oddNum = numbers.filter(num => num > 0)
const oddSum = oddNum.reduce((pre, current) => pre + current, 0)
// console.log(oddSum);


// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3




// Task 5: Implement a simple JavaScript calculator.The calculator should take two numbers and an operator(+, -, *, /) as input and return the result of the operation.

const calculator = (numOne, numTwo, operator) => {
  if(operator === '+') return numOne + numTwo; 
  if(operator === '-') return numOne - numTwo; 
  if(operator === '*') return numOne * numTwo; 
  if(operator === '/') return numOne / numTwo; 
  else return 'Error: Invalid operator';
}

// console.log(calculator(3, 2, '+')); 




// Task 6: Create a program that generates a random password of a specified length.The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

const generateRandomPassword = length => {
  const allCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=[]{}|:;"<>,.?/';
  return Array.from({ length }, () => allCharacters[Math.floor(Math.random() * allCharacters.length)]).join('');
};

const passwordLength = 16;
const randomPassword = generateRandomPassword(passwordLength);
// console.log("Random Password =", randomPassword);



const findSecondHighest = arr => {
  if (arr.length < 2) {
    return null;
  }

  return arr.slice().sort((a, b) => b - a)[1];
}

const number = [3];
const secondHighest = findSecondHighest(number);
console.log(secondHighest);









