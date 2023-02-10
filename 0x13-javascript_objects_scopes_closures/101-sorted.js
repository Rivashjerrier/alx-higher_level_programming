#!/usr/bin/node
const dict = require('./101-data.js');

console.log(Object.entries(dict).reduce((Dict, key) => {
  !Dict[key[1]]
    ? Dict[key[1]] = [key[0]]
    : Dict[key[1]].push(key[0]);
  return Dict;
}, {}));
