// isEven function demo

const isEven = function (num) {
  return num % 2 === 0;
};

console.log(isEven(2));
console.log(isEven(10));
console.log(isEven(11));

let array = [1, 2, 3, 4, 5];

let isEvener = (array) => {
  let result = '';
  for (let i = 0; i < array.length; i++) {
    result += 'Number: ' + array[i] + ' is ' + isEven(array[i]);
    result += '; ' + '\n';
  }
  return result;
};

console.log(isEvener(array));
