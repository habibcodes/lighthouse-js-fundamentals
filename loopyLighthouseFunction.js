// Loopy Lighthouse 2

function loopyLighthouse(range, multiples, words) {
  for (let i = range[0]; i <= range[1]; i++) {
    if (i % multiples[0] === 0 && i % multiples[1] === 0) {
      // replace with word[0][1]
      console.log(words[0] + words[1]);
    } else if (i % multiples[0] === 0) {
      //replace with word[0]
      console.log(words[0]);
    } else if (i % multiples[1] === 0) {
      //replace with word[1]
      console.log(words[1]);
    } else {
      console.log(i);
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ['Batty', 'Beacon']);
loopyLighthouse([100, 200], [3, 4], ['Loopy', 'Lighthouse']);
