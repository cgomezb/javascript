let number = 10;

function increase(number) {
  number++;
}

increase(number);
console.log(number);

/* Vs */

let obj = { value: 10 };

function increaseValue(obj) {
  obj.value++;
}

increaseValue(obj);
console.log(obj);
