const eqArrays = require('./eqArrays');

const assertArraysEqual = function(firstArray, secondArray, expect) {
  
  if (eqArrays(firstArray, secondArray) === expect) {
    console.log(`Assertion Passed: ${firstArray} === ${secondArray} is ${expect}`);
  } else {
    console.log(`Asserion Failed: ${firstArray} === ${secondArray} is not ${expect}`);
  }
}

module.exports = assertArraysEqual;
