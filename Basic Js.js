// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built -in reverse() method. 

const reverseString = inputStr => {
  let reversedString = '';
  for (let i = inputStr.length - 1; i >= 0; i--) {
    reversedString += inputStr[i];
  }
  return reversedString;
};

const string = 'Helo World';
console.log(reverseString(string));




// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

const inputArrayOne = [2, -5, 10, -3, 7, 12, -23, -50,]
const oddNum = inputArrayOne.filter(num => num > 0)
const oddSum = oddNum.reduce((pre, current) => pre + current, 0)
console.log(oddSum);




// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

const findMostFrequentElement = (arr) => {
  const elementCountMap = {};

  arr.forEach((element) => {
    elementCountMap[element] = (elementCountMap[element] || 0) + 1;
  });

  const maxCount = Math.max(...Object.values(elementCountMap));
  const mostFrequentElement = +Object.keys(elementCountMap).find(
    (element) => elementCountMap[element] === maxCount);

  return mostFrequentElement;
};

const inputArrayTwo = [2, 4, 4, 6, 8, 4, 6, 2, 4, 10];
console.log(findMostFrequentElement(inputArrayTwo));




// Task 4: Create a function that takes a sorted array of numbers and a target value as input.The function should find two numbers in the array that add up to the target value.Return an array containing the indices of the two numbers

const findTwoNumbers = (sortedArray, target) => {
  let left = 0;
  let right = sortedArray.length - 1;

  while (left < right) {
    const currentSum = sortedArray[left] + sortedArray[right];

    if (currentSum === target) return [left, right];
    if (currentSum < target) return left++
    right--;
  }

  return [];
};

const inputArray = [1, 3, 6, 8, 11, 15];
const targetValue = 9;
console.log(findTwoNumbers(inputArray, targetValue)); 




// Task 5: Implement a simple JavaScript calculator.The calculator should take two numbers and an operator(+, -, *, /) as input and return the result of the operation.

const calculator = (numOne, numTwo, operator) => {
  if(operator === '+') return numOne + numTwo; 
  if(operator === '-') return numOne - numTwo; 
  if(operator === '*') return numOne * numTwo; 
  if (numOne, numTwo === 0) return 'Error: Cannot divide by zero';   
  if(operator === '/') return numOne / numTwo;
  else return 'Error: Invalid operator';
}
console.log(calculator(100, 0, '/')); 




// Task 6: Create a program that generates a random password of a specified length.The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

const generateRandomPassword = length => {
  const allCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=[]{}|:;"<>,.?/';
  return Array.from({ length }, () => allCharacters[Math.floor(Math.random() * allCharacters.length)]).join('');
};

const passwordLength = 16;
console.log("Random Password:", generateRandomPassword(passwordLength));




// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers.The function should return the second smallest number.

const findSecondSmallest = arr => {
  if (arr.length < 2) return "Array should contain at least 2 elements.";
  return arr.slice().sort((a, b) => a - b)[1];
}

const inputArrayFour = [3, 4, 5, 6, 7, 8];
const secondSmallest = findSecondSmallest(inputArrayFour);
console.log(secondSmallest);












