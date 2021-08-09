// Looping - last index of //

/*
    - create a func that will determine the last index of an item in an array
    - func -> lastIndexOf();
    - func returns index value of the last item in a given array
    - should return -1 if no such value exists in the given array
    - e.g.: lastIndexOf([ 0, 1, 4, 1, 2 ], 1);	3
*/

// function lastIndexOf(array, num) {
//   return array.lastIndexOf(num);
// }

function lastIndexOf(array, num) {
  for (let i = array.length; i >= 0; i--) {
    if (array[i] === num) return i;
  }
  return -1;
}

console.log(lastIndexOf([0, 1, 4, 1, 2], 1));
console.log(lastIndexOf([0, 1, 4, 1, 2], 2));
console.log(lastIndexOf([0, 1, 4, 1, 2], 3));
console.log(lastIndexOf([5, 5, 5], 5));
console.log(lastIndexOf([3], 3));
