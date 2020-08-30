// Function Declaration 
// (I can use this function before declare it)
walk();

function walk() {
  console.log('walk');
}

// Anonymous Function Expression 
// (I cannot use this function before declare it)
// let run = function() {
//   console.log('run');
// };

// Name Function Expression
let run = function run() {
  console.log('run');
};

let move = run;
run();
move();
