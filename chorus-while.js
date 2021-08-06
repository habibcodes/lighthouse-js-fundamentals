// chorus repetition via while-loop//

// using while-loop
const chorus = 'someChorus';
let repeat = 0;
while (repeat < 10) {
  console.log(chorus);
  repeat++;
}
console.log('End Loop');

// using conditional while-loop
const chorus = 'someChorus';
let repeat = 0;
while (repeat < 10) {
  if (repeat === 5) {
    console.log('changeKey');
  }
  console.log(chorus);
  repeat++;
}
console.log('End Loop');
