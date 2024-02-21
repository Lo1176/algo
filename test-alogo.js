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
    let biggestNumber = arr[i][0];
    for (let j = 0; j < arr.length; j++) {
      biggestNumber = arr[i][j] > biggestNumber ? arr[i][j] : biggestNumber;
    }
    arrResult.push(biggestNumber);
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

console.log(confirmEnding('Bastian', 'tian'));
