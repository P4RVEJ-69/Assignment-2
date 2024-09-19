//1. Write a function named calculateDifference that takes two arguments

const a = 8;
const b = 5;
const calculateDifference = a - b;
console.log(calculateDifference);

// 2.Write a function named isOdd that takes one argument and returns true

const num = 11;

function isOdd(num) {
  let reminder = num % 2;
  if (reminder == 0) {
    console.log(`False`);
  } else {
    console.log(` True`);
  }
}

isOdd(num);

// 3.Write a function named findMin that takes an array of

let numbers = [5, 15, 24, 34, 1, 8, 15];
const findMin = Math.min(...numbers);

console.log(findMin);

// 4.Write a function named filterEvenNumbers that takes an array of

let numberss = [86, 41, 55, 85, 90, 24];

let evenNumbers = numberss.filter(function (element) {
  return element % 2 === 0;
});

console.log(`Even numbers in an array are: ${evenNumbers}`);

// 5) Write a function named sortArrayDescending that takes an array of

const points = [40, 100, 1, 5, 25, 10];

const sortArrayDescending = points.sort(function (a, b) {
  return b - a;
});

console.log(sortArrayDescending);

// 6) Write a function named lowercaseFirstLetter that takes a string

const anotherGreeting = "GOOD MORNING!!";

console.log(anotherGreeting.toLowerCase());

// 7) Write a function named countVowels that takes a string and returns the number of vowels

function countVowels(str) {
  const vowelMatches = str.match(/[aeiouAEIOU]/g);

  return vowelMatches ? vowelMatches.length : 0;
}

const inputString = "parvej Ahmed";
const result = countVowels(inputString);

console.log(`Number of vowels in (${inputString}) : ${result}`);

// another way

function countVowels(str) {
  const vowels = "aeiouAEIOU";

  return [...str].filter((char) => vowels.includes(char)).length;
}

const string = "Parvej Ahmed";
console.log(countVowels(string));

// 8) Write a function named findAverage that takes an array of

let array = [10, 22, 16, 24];
let sum = array.reduce((acc, curr) => acc + curr, 0);
let average = sum / array.length;
console.log("Average: " + average);
