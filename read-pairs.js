'use strict';
const fs = require('fs');

const util = require('util');

const dataPromise = util.promisify(fs.readFile);

// function toHTML(arr) {

//     const tags = ['<h3>','</h3>','<ul>','</ul>','<li>','</li>']
//     for(let i = 0; i< arr.length ; i++){
//         let marker = 0;
//         if(arr[i] === '/n'){
//             arr.splice(marker,0,tags[0]);
//             arr.splice(i,0,tags[1]);
//             i++;
//         }else if(arr[i !== ' ']){
//             marker = i;
//             arr.splice(i,0,tags[2]);
//             arr.splice(i,0,tags[3]);
//             for(let j = i; i < arr.length; j++) {
//                 if(arr[j]=== '/n'){
//                     arr.splice(j,0,tags[3]);
//                     i = j;
//                     marker = j;
//                     break;
//                 }else if(arr[j]=== '.'){
//                     arr.splice(j,0,tags[4]);
//                     arr.splice(j,0,tags[2]);
//                     marker = j;
//                 }
//             }
//         }
//     }
// }
    
dataPromise("./files/pair-programming.txt", (err, data) =>{
    if (err) throw err;

    return data;

})
.then(data => {
    //   console.log(data);
    //     let stringifyBuffer = data =>{
    //         let str = '';

    //         for(let char of data) {
    //             str += String.fromCharCode(char);
    //         }

    //         return str;
    //     }
    console.log(data.split(''))
    // let stringed = stringifyBuffer(data);
    console.log(data);


    // stringed = '<article>' + stringed + "</article>";

    // console.log(stringed);

    return "this call is done";


});



// let = arr.split('/n')

// for(i=0; i,arr.length;i++)

