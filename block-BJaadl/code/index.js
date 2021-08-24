let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.

function findLongestWord(arr){
  let sortedArray = arr.sort((a,b)=>a.length - b.length);
  return sortedArray[sortedArray.length-1];
}
findLongestWord(words);

// - Convert the above array "words" into an array of length of word instead of word.

function lengthOfWords(arr){
  let wordLength = arr.map(ele => ele.length);
  return wordLength;
}
lengthOfWords(words);

// - Create a new array that only contains word with atleast one vowel.

function arrayVowel(arr){
  let vowels = ["a", "e", "i", "o", "u"];
  for(let i=0; i<vowels.length; i++) {
    return arr.filter(ele => ele.includes(vowels[i]));
  }
}
arrayVowel(words);

// - Find the index of the word "rhythm"

console.log(words.indexOf("rhythm"));

// - Create a new array that contians words not starting with vowel.

// - Create a new array that contianse words not ending with vowel

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers

function sumArray(arr){
  let sumOfNumber = arr.sort((a,b) => a + b);
  return sumOfNumber;
}
sumArray(numbers);

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]

// - Create a new array that contains only even numbers

// - Create  a new array that contains only odd numbers.

// - Create a new array that should have true for even number and false for odd numbers.

// - Sort the above number in assending order.

// - Does sort mutate the original array?

// - Find the sum of the numbers in the array.

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
