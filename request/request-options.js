// Using xhr

const xhr = new XMLHttpRequest();
xhr.open('get', 'https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1');
xhr.onload = () => { console.log('Response: ' + xhr.response); };
xhr.onerror = () => { console.log('Something bad happend'); };
xhr.send();

// Other way
xhr.onreadystatechange = function () {
  const STATUS_OK = 200;
  if (xhr.readyState === xhr.DONE) {
    if (xhr.status === STATUS_OK) {
      console.log(xhr.responseText);
    } else {
      console.log('Error: ' + xhr.status);
    }
  }
};

// Using fetch

let response = await fetch('https://api.github.com/repos/cgomezb/javascript/commits');
let commits = await response.json();
console.log(commits[0].author);


console.log('start');
let response = await fetch('https://api.github.com/repos/cgomezb/javascript/commits')
  .then(async (res) => {
    debugger
    console.log('complete');
    let commits = await res.json();
    return commits;
  })
  .catch(err => {
    debugger
    console.log('error');
  })
debugger
console.log('after await');
console.log('response ', response);
// let commits = await response.json();
// console.log(commits[0].author);
console.log('end');


const run = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({ response: ['test'] });
    }, 2500);

    // An alternative for setTimeout
    // setTimeout(resolve, 500, "one");
  });
}

console.log('start');
let response = await run()
  .then(async (res) => {
    debugger
    console.log('complete');
    return res;
  })
  .catch(err => {
    debugger
    console.log('error');
    return err;
  })

console.log('after await');
console.log('response ', response);
// let commits = await response.json();
// console.log(commits[0].author);
console.log('end');
