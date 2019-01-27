'use strict';

function splitIntoNestedArray(buffer){
  const nestedArray = [];

  let stringData = (/.*/gm).exec(buffer).input;

  let splitOnDouble = stringData.split(/[\n]{2}/gm);

  for(let i = 0; i < splitOnDouble.length; i++){
    nestedArray.push(splitOnDouble[i].split(/[\n]{1}/gm));
  }
  return nestedArray;
}

function handleHeader(str){

  // if starts with "2."
  if ( (`${str[0]}${str[1]}`).match(/\d\./) ) {
    str = `<h3>${str}</h3>`;
  } else {
    str = `<h2>${str}</h2>`;
  }

  return str;
}

function handleParagraph(str){
  const sentenceArray = str.split('. ');

  for(let i = 0; i < sentenceArray.length; i++){
    if(i === sentenceArray.length - 1 ){
      sentenceArray[i] = `<li>${sentenceArray[i]}</li>`;
    } else {
      sentenceArray[i] = `<li>${sentenceArray[i]}.</li>`;
    }
  }
  return sentenceArray.join('');
}

function recombineNestedArrays(nestedArr){
  // join single returns
  for(let i = 0; i < nestedArr.length; i++){
    nestedArr[i] = nestedArr[i].join('\n');
  }

  // then join double returns
  return nestedArr.join('\n\n');
}

function alterData(data){

  const splitOnSingle = splitIntoNestedArray(data);

  // outside loop
  for(let i = 0; i < splitOnSingle.length; i++){
    // inside loop
    for(let j = 0; j < splitOnSingle[i].length; j++){
      let str = splitOnSingle[i][j];

      // if a header
      if (str.length < 35){
        splitOnSingle[i][j] = handleHeader(splitOnSingle[i][j]);
      }

      // if a paragraph
      if (str.length > 50){
        splitOnSingle[i][j] = handleParagraph(splitOnSingle[i][j]);
      }
    }
  }

  let result = recombineNestedArrays(splitOnSingle);

  return Buffer.from(`<article>${result}</aritcle>`);
}

module.exports = {
  splitIntoNestedArray,
  handleHeader,
  handleParagraph,
  recombineNestedArrays,
  alterData,
};