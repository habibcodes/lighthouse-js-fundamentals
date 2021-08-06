// chorus repetition via for-loop //

// using for-loop
for (let i = 0; i < 10; i++) {
  console.log('someChorus');
}
console.log('for loop ended');

// adding conditional inside of for-loop
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log('condition inside for-loop');
  }
  console.log('repeated inside for-loop');
}
console.log('end of conditional for-loop');
