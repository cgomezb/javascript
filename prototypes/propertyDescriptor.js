let person = { name: "Mosh" };
let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");
console.log(descriptor);

Object.defineProperty(person, "name", {
  writable: true,   // Can I change the property?
  enumerable: true, // Can I see the property using Object.keys?
  configurable: true, // Can I delete the property?

  value: 'George', // I can set a value for the new property
  // Also I can define a get / set method for the property
  get: function() {
    return name;
  },
  set: function(value) {
    if (!value) {
      throw new Error('Invalid name.');
    }

    name = value;
  }
});
