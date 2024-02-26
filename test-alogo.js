// algo from https://www.freecodecamp.org
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/

function reverseString(str) {
  return str.split('').reverse().join('');
}

// console.log(reverseString('hello'));

const toto = (num) => {
  let arr = [];
  let result = 1;
  for (let index = 1; index <= num; index++) {
    arr.push(index);
  }
  for (let i = 0; i < arr.length; i++) {
    result = result * arr[i];
  }
  return result;
};

// console.log('toto: ', toto(5));

function findLongestWordLength(str) {
  let arrayOfWords = str.split(' ');
  let result = '';
  arrayOfWords.map((word) => {
    return (result = word.length > result.length ? word : result);
  });
  return result.length;
}

// console.log(
//   findLongestWordLength('The quick brown fox jumped over the lazy dog')
// );

function largestOfFour(arr) {
  let arrResult = [];
  for (let i = 0; i < arr.length; i++) {
    // let biggestNumber = arr[i][0];
    // for (let j = 0; j < arr.length; j++) {
    //   biggestNumber = arr[i][j] > biggestNumber ? arr[i][j] : biggestNumber;
    // }
    arrResult.push(arr[i].sort((a, b) => b - a)[0]);
  }
  return arrResult;
}

// console.log(
//   largestOfFour([
//     [17, 23, 25, 12],
//     [25, 7, 34, 48],
//     [4, -10, 18, 21],
//     [-72, -3, -17, -10],
//   ])
// );

function confirmEnding(str, target) {
  const endLength = target.length;
  const lastLetters = str.slice(-endLength);
  return lastLetters === target && true;
}

// console.log(confirmEnding('Bastian', 'tian'));

function repeatStringNumTimes(str, num) {
  let result = '';
  for (let i = 1; i <= num; i++) {
    result += str;
  }
  return result;
  // for this exercice, the built-in repeat() method should not be used.

  // return num > 0 ? str.repeat(num) : '';
}

// console.log(repeatStringNumTimes('abc', 3));

/**
 * Truncate a String
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
Return the truncated string with a ... ending.
 */
function truncateString(str, num) {
  /**
   * can use slice or substring for this case
   * substring vs slice are the same except:
   * if start > stop, substring swaps the arguments, slice returns ""
   * if argument is NaN or negative, substring will treat it as a 0
   * if start is negative, slice sets char from the end of string
   * if stop is negative, slice sets stop to string.length – Math.abs(stop)
   */
  if (str.length > num) {
    return str.substring(0, num).concat('...');
  } else {
    return str;
  }
}

// console.log(truncateString('A-tisket a-tasket A green and yellow basket', 8));

/**
 * Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'.
 * This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
 */
function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
}

// console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));

/**
 * Check if a value is classified as a boolean primitive. Return true or false.
 * Boolean primitives are true and false.
 */

function booWho(bool) {
  return typeof bool === 'boolean';
}

// console.log(booWho(false));
// console.log(booWho('toto'));
// console.log(true && false);

/**
 * Return the provided string with the first letter of each word capitalized.
 * Make sure the rest of the word is in lower case.
 * For the purpose of this exercise, you should also capitalize connecting words like the and of.
 */
function titleCase(str) {
  const arr = str
    .toLowerCase()
    .split(/[,. \s]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  return arr.join(' ');
}

// console.log(titleCase("I'm a little tea pot"));

/**
 * Slice and Splice
 * You are given two arrays and an index.
 * Copy each element of the first array into the second array, in order.
 * Begin inserting elements at index n of the second array.
 * Return the resulting array. The input arrays should remain the same after the function runs.
 */
function frankenSplice(arr1, arr2, n) {
  // permet de créer une nouvel array sans modifier arr2 par la suite
  let result = [...arr2];
  result.splice(n, 0, arr1);
  // concat permet de faire un flatten comme en Ruby
  return [].concat(...result);
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
console.log(frankenSplice([1, 2, 3], [4, 5], 1));
