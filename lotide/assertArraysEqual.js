// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`Assertion Passed: ${actual} ===  ${expected}`);
//   } else {
//     console.log(`Assertion Failed: ${actual} !== ${expected}`);
//   }
// };


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

assertArraysEqual(["1", "2", "3"], ["1", "2", "4"], false);