// Speed Limit = 70
// 5 => 1 point
// Math.floor
// 12 points => License Suspended

console.log(checkSpeed(80));

function checkSpeed(speed) {
  if (typeof speed != "number") {
    return 'Not a number';
  }
  
  speed = Math.floor(speed);

  if (speed <= 70) {
    return 'Ok';
  }


  
  return speed;
}
