'use strict';

let path = './files/articler.txt';

const fs = require('fs');

const alterData = require('./article-module.js').alterData;

//read file
fs.readFile(path, function callback(err, data) {
  if(err) {throw Error(err); }

  let newData = alterData(data);
  
  fs.writeFile(path, newData, (err, data) => {
    if(err) {throw Error(err); }
  });
});