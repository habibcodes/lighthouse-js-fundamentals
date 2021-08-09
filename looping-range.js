// Looping - Range //

/* 
    - create an array of every number b/w 0-100 using a functin with a given start, end, and step parameter
    - function must take 3 integer params
    - function must return array of nums from "start" to "end" counting by "step"
    - e.g.,: range(0, 10, 2); //[ 0, 2, 4, 6, 8, 10 ]
    - it should return an empy array if given incorrect params:
        - start/end/step undefined
        - start being greater than end
        step being 0 or negative

    - use array.push(value);
*/

function range(start, end, step) {
  // initialise array
  let array = [];
  // loop
  for (let i = start; i <= end; i += step) {
    if (
      start === '' ||
      end === '' ||
      step === '' ||
      start > end ||
      step === 0
    ) {
      return array;
    } else {
      array.push(i);
    }
  }
  return array;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
