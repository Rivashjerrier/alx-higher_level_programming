#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request(url, (err, response, body) => {
  if (err) {
    console.log(err);
 } else {
    let number = 0;
    const data = JSON.parse(body);
    data.results.forEach(function (movies) {
      movies.characters.forEach(function (character) {
        if (character.search('/18/') !== -1) {
          count++;
        }
      });
    });
    console.log(count);
  }
});
