#!/usr/bin/node

const request = require('request');
const API_url = 'https://swapi-api.hbtn.io/api/films/' + process.argv[2];
const data = JSON.parse(body);

request(API_url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data.title);
  }
});
