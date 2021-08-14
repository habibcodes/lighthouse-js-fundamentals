// Objects - Trash to Treasure //

/*

    - create a func called smartGarbage(trash,bins) which increases the count for three vars:
        - waste
        - recycling
        - compost
    - Our function will receive two arguments:
        - The first argument, trash, is a string that will tell our function what type of item is being submitted.
        - The second argument, bins, is an object containing three properties (waste, recycling, and compost), which hold some numerical value. Our function must increase the correct value in the bins object, and then return the newly updated object.
*/

// define bins object
// let bins = {
//   waste: 0,
//   recycling: 0,
//   compost: 0,
// };
// console.log(bins.waste);
// console.log(bins.recycling);
// console.log(bins.compost);
// define func smartGarbage(trash,bins);
// function smartGarbage(trash, bins) {
//   for (let key of Object.keys(bins)) {
//     if (trash === key) {
//       key = +1;
//       return key;
//     }
//   }
// }

const smartGarbage = (trash, bins) => {
  if (trash === 'waste') {
    // return (bins.waste += 1);
    bins.waste += 1;
    bins.recycling = bins.recycling;
    bins.compost = bins.compost;
    return bins;
  } else if (trash === 'recycling') {
    // return (bins.recycling += 1);
    bins.waste = bins.waste;
    bins.recycling += 1;
    bins.compost = bins.compost;
    return bins;
  } else if (trash === 'compost') {
    // return (bins.compost += 1);
    bins.waste = bins.waste;
    bins.recycling = bins.recycling;
    bins.compost += 1;
    return bins;
  } else {
    return 'Enter a valid number.';
  }
};

// const smartGarbage = (trash, bins) => {
//   for (const trash in bins) {
//     if (trash === 'waste') {
//       return (bins.waste += 1);
//     } else if (trash === 'recycling') {
//       return (bins.recycling += 1);
//     } else if (trash === 'compost') {
//       return (bins.compost += 1);
//     } else {
//       return 'Enter a valid number.';
//     }
//   }
// };

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));
// conditional to sort "trash" type
// add type to bins counters
// return bins object with updated counters
