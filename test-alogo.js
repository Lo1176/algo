function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString('hello'));

const toto = (num) => {
  let arr = [];
  for (let index = 1; index <= num; index++) {
    arr.push(index);
  }
  console.log('🚀 ~ toto ~ arr:', arr);
  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    result = result * arr[i];
  }
  return result;
};

toto(5);
