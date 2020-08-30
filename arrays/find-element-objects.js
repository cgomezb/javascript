const courses = [
  { id: 1, name: 'a' },
  { id: 2, name: 'b' },
];

// It doesn't work because objects have different reference
console.log(courses.includes({ id: 1, name: 'a' }));

/* Find element object */

// return { id: 1, name: 'a' }
const course = courses.find(function(course) {
  return course.name === 'a';
});

// return { id: 1, name: 'a' }
const otherWay = courses.find(course => course.name === 'a');

console.log(course, otherWay);

/* Find index of element object */

// return 1
const courseIndexOf = courses.findIndex(function(course) {
  return course.name === 'b';
});

// return 1
const otherWayIndexOf = courses.findIndex(course => course.name === 'b');

console.log(courseIndexOf, otherWayIndexOf);