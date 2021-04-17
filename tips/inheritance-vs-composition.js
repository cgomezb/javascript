class Monster {
  constructor(name) {
    this.name = name;
  }

  attack() {
    console.log(`${this.name} attacked`);
  }

  walk() {
    console.log(`${this.name} walked`);
  }
}

class FlyingMonster extends Monster {
  fly() {
    console.log(`${this.name} flew`);
  }
}

class SwimmingMonster extends Monster {
  swim() {
    console.log(`${this.name} swam`);
  }
}

const bear = new Monster('bear');
bear.walk();
bear.attack();

const eagle = new FlyingMonster('aegle');
aegle.walk();
aegle.attack();
aegle.fly();

const shark = new SwimmingMonster('shark');
aegle.walk();
aegle.attack();
aegle.swim();

// What about to create a new Monster who can fly and swim?
// Think about composition instead of inheritance to avoid duplicate code

// Example

function swimmer({ name }) {
  return {
    swim: () => console.log(`${name} swam`)
  }
}

function walkerAndAttacker({ name }) {
  return {
    walk: () => console.log(`${name} walked`),
    attack: () => console.log(`${name} attacked`)
  }
}

function realMonsterCreator(name) {
  const monster = { name };

  return {
    ...monster,
    ...swimmer(monster),
    ...walkerAndAttacker(monster),
  }
}

function swimmingMonsterCreator(name) {
  const monster = { name };

  return {
    ...monster,
    ...swimmer(monster)
  }
}

const duckMonster = swimmingMonsterCreator('Duck');
duckMonster.swim();

const turtleMonster = swimmingMonsterCreator('Turtle');
turtleMonster.swim();

const realMonster = realMonsterCreator('TheMonster');
realMonster.walk();
realMonster.swim();
realMonster.attack();
