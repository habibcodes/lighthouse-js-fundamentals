// How Many Hundreds assignment

/* 
    - create a function that determins how many hundreds in a number
    - e.g., howManyHundreds(1000) //10
*/

function howManyHundreds(num) {
  return Math.floor(num / 100);
}

// testing
console.log(howManyHundreds(1000));
console.log(howManyHundreds(894));
console.log(howManyHundreds(1000), '=?', 10);
console.log(howManyHundreds(894), '=?', 8);
console.log(howManyHundreds(520), '=?', 5);
console.log(howManyHundreds(99), '=?', 0);
console.log(howManyHundreds(0), '=?', 0);
