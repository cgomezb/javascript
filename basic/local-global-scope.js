// Global
const color = 'red';

function start() {
  // Local
  const message = 'Hello';

  if (true) {
    // Local
    const another = 'Bye';
  }
  
  console.log(another);

  for (let i = 0; i < 5; i++) {
    // Local
    console.log(i);
  }

  console.log(i);
}

function stop() {
  // Local
  const message = 'Bye';
}

console.log(message);

start();
