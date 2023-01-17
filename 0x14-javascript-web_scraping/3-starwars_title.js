#!/usr/bin/node

const request = require('request');
const API_url = 'https://swapi-api.hbtn.io/api/films/' + process.argv[2];

request(API_url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const info = JSON.parse(body);
    console.log(data.title);
  }
});
