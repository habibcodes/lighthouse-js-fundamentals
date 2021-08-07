// Voting Station

// capacity >= 20
// type = school/community center

let goodStations = [];

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre'],
];

const chooseStations = function (stations) {
  // function chooseStations(stations){ codeBlock}
  // iterate over array
  for (let station of stations) {
    // capacity check >=20
    if (station[1] >= 20) {
      // location type check school||commmunity centre
      if (station[2] === 'school' || station[2] === 'community centre') {
        // push to goodStations
        goodStations.push(station[0]);
      }
    }
  }
  return goodStations;
};

chooseStations(stations);
