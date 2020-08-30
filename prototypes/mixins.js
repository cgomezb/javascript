function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

const canEat = {
  eat: function() {
    this.hunger--;
    console.log('eating');
  }
};

const canWalk = {
  walk: function() {
    console.log('walking');
  }
};

const canSwim = {
  swim: function() {
    console.log('swim');
  }
};

function Person() {
}

// const person = Object.assign({}, canEat, canWalk);
// console.log(person);

mixin(Person.prototype, canEat, canWalk);
const person = new Person();
console.log(person);

function Goldfish() {}

mixin(Goldfish.prototype, canEat, canSwim);
const goldfish = new Goldfish();
console.log(goldfish);
