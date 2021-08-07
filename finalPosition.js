// X Marks the Perfect Shot Assingment

/* 
    - array movements mapped to cardinal directions
    - south and west are negative values
    - north and east are positive values
    - directions come from "moves array"
    - output array will contain final coordinates in nums
    - starting position is [0,0]
*/

const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];

function finalPosition(moves) {
  let x = 0;
  let y = 0;
  let position = [0, 0];
  for (let move of moves) {
    if (move === 'north') {
      //   y += 1;
      position[1] += 1;
    } else if (move === 'south') {
      //   y += -1;
      position[1] -= 1;
    } else if (move === 'east') {
      //   x += 1;
      position[0] += 1;
    } else {
      //   x += -1;
      position[0] -= 1;
    }
    // console.log(x);
    // console.log(y);
    // console.log(position);
    // position.push(x, y);
    // position.push(y);
  }
  return position;
}

console.log(finalPosition(moves));
