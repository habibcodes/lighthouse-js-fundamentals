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
];

const metric = 'redness';

const judgeVegetable = (array, metric) => {
  // temp container for referenced value
  let temp;
  // some loop to go over and compare each instance of that metric against the others (2D array?)
  // return the name of the submitter
};

judgeVegetable(vegetables, metric);
