#!/usr/bin/node

const request = require('request');
const api = 'https://swapi-api.alx-tools.com/api/films/:id'
const id = process.argv[2];

request(api + id, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const data = JSON.parse(body);
    console.log(data.title);
  }
});
