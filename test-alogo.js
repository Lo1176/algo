function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString('hello'));

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

console.log('toto: ', toto(5));

function findLongestWordLength(str) {
  let arrayOfWords = str.split(' ');
  let result = '';
  arrayOfWords.map((word) => {
    return (result = word.length > result.length ? word : result);
  });
  return result.length;
}

console.log(
  findLongestWordLength('The quick brown fox jumped over the lazy dog')
);
