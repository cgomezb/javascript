let input = '    Javascript   ';
let output = '<div>' + input.trim() + '</div>';

const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;
const wrap = (type, str) => `<${type}>${str}</${type}>`;
const toLowerCase = str => str.toLowerCase();

// Lodash => compose, pipe
const result = wrapInDiv(toLowerCase(trim(input)));

// alt + 60 <
// alt + 61 =
// alt + 62 >