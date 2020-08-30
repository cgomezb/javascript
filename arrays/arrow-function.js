const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
  ];
  
  /* Find element object */
  
  // return { id: 1, name: 'a' }
  const course = courses.find(course => course.name === 'a');

  console.log(course);
  