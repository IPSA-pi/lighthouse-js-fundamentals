const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

const finalPosition = function(moves) {
  let pos = [0,0];
  for (let m of moves) {
    switch (m) {
    case 'north':
      pos[1] += 1;
      break;  
    case 'east':
      pos[0] += 1;
      break;
    case 'south':
      pos[1] -= 1;
      break;
    case 'west':
      pos[0] -= 1;
      break;
    }
  }
  return pos;
}
console.log(finalPosition(moves));