// Sorting Array of Objects - We're Rooting For You //

/*
    - create a function called judgeVegetable(); hat will decide which veg is best based on a given criteria
    - the func should receive 2 params:
        1) a list of vegetables
        2) judging criteria (redness or plumpness)
    - func must return name of person who submitted the veg with the highest ranking in the provided category

*/
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3,
  },
  {
    submitter: 'Test Test',
    redness: 43,
    plumpness: 3,
  },
];

const metric = 'redness';

function judgeVegetable(arr, metric) {
  arr.sort((a, b) => parseFloat(b[metric] - a[metric]));
  return arr[0].submitter;
}

// const judgeVegetable = (vegetables, metric) => {
//   let temp;
//   for (let i = 0; i < vegetables.length - 1; i++) {
//     for (let j = 0; j < vegetables[i].length - 1; j++) {
//       if (vegetables[i].metric > vegetables[i + 1].metric) {
//         temp = vegetables[i].metric;
//         return temp;
//       }
//     }
//   }
//   console.log(temp);
// };

// const judgeVegetable = (vegetables, redness) => {
//   let temp;
//   vegetables.forEach(function () {
//     // if (vegetables[i].metric > vegetables[i + 1].metric) {
//     //   temp = vegetables[i].metric;
//     //   console.log(temp);
//     // }
//     console.log(vegetables[i].metric);
//   });
// };

// const judgeVegetable = (vegetables = [], metric) => {
//   let swapped;
//   do {
//     swapped = false;
//     for (let i = 0; i < vegetables.length - 1; i++) {
//       if (vegetables[i].metric > vegetables[i + 1].metric) {
//         let temp = vegetables[i];
//         vegetables[i] = vegetables[i + 1];
//         vegetables[i + 1] = temp;
//         swapped = true;
//       }
//     }
//   } while (swapped);
// };

console.log(judgeVegetable(vegetables, metric));
// console.log(vegetables);
