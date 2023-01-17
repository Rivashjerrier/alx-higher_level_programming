#!/usr/bin/node

const request = require('request');
const API_url = 'https://swapi-api.alx-tools.com/api/films/:id' + process.argv[2];

request(API_url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const data = JSON.parse(body);
    console.log(data.title);
  }
});
