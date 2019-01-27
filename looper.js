'use strict';

const fs = require('fs');
const toBuff = "const names = ['fletcher', 'michael','george']; names.forEach(function(value) {console.log(value)});";
let buffer = [];
const pushArr = toBuff.split('');



pushArr.forEach(function(value){
  buffer.push(Buffer(value));
});

fs.writeFile('./files/loop.js', buffer.join('') ,(err) => {
  if(err) throw err;
  console.log('created loop.js');
});

