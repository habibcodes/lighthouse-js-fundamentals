// Array of Objects - Driving Mayor Daisy //

/* 
    - create a function called carPassing(cars, speed) that takes an array of car objects, 'cars', and the speed of a car. It should return all previous array elements and the new one with the current time
    - use Date.now(); method
    - speed is a parameter that can be passed in to the function, and becomes a key for the most recent car element entry
    - we can use the .push(); array method

*/

// array
const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35,
  },
];

const carPassing = (cars, speed) => {
  cars.push({ time: Date.now(), speed: speed });
  return cars;
};

const speed = 38;

console.log(carPassing(cars, speed));
