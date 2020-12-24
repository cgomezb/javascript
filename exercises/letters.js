const s = "javascriptloops";
const englishVowels = ['a', 'e', 'i', 'o', 'u'];

let vowels = [];
let consonant = [];

s.split('').forEach(l => {
  englishVowels.includes(l)
    ? vowels.push(l)
    : consonant.push(l);
});

[ ...vowels, ...consonant ].forEach(l => console.log(l));

/* Other way */

const s = "javascriptloops";
const englishVowels = ['a', 'e', 'i', 'o', 'u'];

let consonant = [];

s.split('').forEach(l => {
  englishVowels.includes(l)
    ? console.log(l)
    : consonant.push(l);
});

consonant.forEach(l => console.log(l));