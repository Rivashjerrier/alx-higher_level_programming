#!/usr/bin/node

const request = require('request');
request(process.argv[2], (error, response, body) => {
  if (err) {
    console.log(err);
  } else {
    console.log('code: ' + response.statusCode);
  }
});
