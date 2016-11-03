'use strict';

function countIndex(input){

  var str = input.replace(/ /, "") // replace spaces with no spaces

  var obj = {}; // create empty storage for keys/values

  for(var i = 0; i < str.length; i++){
    var letter = str[i];
    debugger;
    if(obj[letter] === undefined) // is the object key missing?
    {
      obj[letter] = []; // create an empty array for stt [i]
    }
    obj[letter].push(i); // then push the index value of the letter into the array
  }

  return obj;
};

console.log(countIndex("Lighthouse"));