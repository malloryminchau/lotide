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


const middle = function(array) {
  let mid = [];
  if (array.length < 3) {
    return mid;
  } else if ((array.length % 2) === 0) {
    let midIndexTwo = (array.length / 2);
    let midIndexOne = midIndexTwo - 1;
    mid.push(array[midIndexOne]);
    mid.push(array[midIndexTwo]);
  } else if ((array.length %2) !== 0) {
    let midIndex = (array.length - 1) /2;
    mid.push(array[midIndex]);
  }
  return mid;
}


console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []

console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]

console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]