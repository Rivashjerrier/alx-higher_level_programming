#!/usr/bin/node

const request = require('request');

request(process.argv[2], (err, response, body) => {
  if (!err) {
    const tasks = JSON.parse(body);
    const completed_tasks = [];
    tasks.forEach(function (user) {
      if (completed_tasks[user.userId] === undefined) {
        completed_tasks[user.userId] = 0;
      }
      if (user.completed === true) {
        completed_tasks[user.userId]++;
      }
   });
    const number = {};
   for (let i = 1; i < completed_tasks.length; ++i) {
      if (complete_tasks[i] > 0) {
        number[i] = completed_tasks[i];
      }
    }
    console.log(number);
  }
});
