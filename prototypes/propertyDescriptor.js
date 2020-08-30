let person = { name: "Mosh" };
let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");
console.log(descriptor);

Object.defineProperty(person, "name", {
  writable: true,   // Can I change the property?
  enumerable: true, // Can I see the property using Object.keys?
  configurable: true // Can I delete the property?
});
