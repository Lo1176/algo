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

console.log(truncateString('A-tisket a-tasket A green and yellow basket', 8));
