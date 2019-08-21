
const eqArrays = function(firstArray, secondArray) {
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
    
  }
  return true;
}

const assertArraysEqual = function(firstArray, secondArray, expect) {
  
  if (eqArrays(firstArray, secondArray) === expect) {
    console.log(`Assertion Passed: ${firstArray} === ${secondArray} is ${expect}`);
  } else {
    console.log(`Asserion Failed: ${firstArray} === ${secondArray} is not ${expect}`);
  }
}


const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here

  //sentence = sentence.replace(/ /g, '');
  let array = sentence.split('');
  //let results = {};
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== " ") {
      if (results[array[i]]) {
        results[array[i]].push(i);
      } else {
        results[array[i]] = [i];
      }
    }

  }
  return results;
};


console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("hello").e, [1], true);
