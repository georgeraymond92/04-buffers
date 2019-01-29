'use strict';

let path = './files/pair-programming.txt';
let target = './files/articled.html';
const fs = require('fs');

const alterData = require('./article-module.js').alterData;

//read file
fs.readFile(path, function callback(err, data) {
  if(err) {throw Error(err); }

  let newData = alterData(data);
  
  fs.writeFile(target, newData, (err, data) => {
    if(err) {throw Error(err); }
  });
});