// Concatenate 2 arrays//

/*
    - create a function that will concatenate two arrays together
    - e.g., concat([ 1, 2, 3 ], [ 4, 5, 6 ]);	[ 1, 2, 3, 4, 5, 6 ]

*/

function concat(arr1, arr2) {
  return arr1.push(...arr2);
}

// let arr = [1, 2, 3];
// let arr2 = [4, 5, 6];

// console.log(concat(arr, arr2));
// console.log(arr);

console.log(concat([1, 2, 3], [4, 5, 6]), '=?', [1, 2, 3, 4, 5, 6]);
console.log(concat([0, 3, 1], [9, 7, 2]), '=?', [0, 3, 1, 9, 7, 2]);
console.log(concat([], [9, 7, 2]), '=?', [9, 7, 2]);
console.log(concat([5, 10], []), '=?', [5, 10]);
