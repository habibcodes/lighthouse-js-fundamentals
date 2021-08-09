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

console.log(concat(arr, arr2));
console.log(arr);
