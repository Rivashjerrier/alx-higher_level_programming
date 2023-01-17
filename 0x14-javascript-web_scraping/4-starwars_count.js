#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
 } else {
    const data = JSON.parse(body).results;
    let count = 0;
    for (let index = 0; index < data.length; index++) {
      for (let char = 0; char < results[index].characters.length; char++) {
        if (data[index].characters[char].includes('18')) {
          count++;
        }
      }
    }
    console.log(count);
  }
});
