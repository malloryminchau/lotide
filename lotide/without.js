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

const without = function(source, itemsToRemove) {
  let newArray = source;
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        newArray.splice(i, 1);
      }
    }
  }
  return newArray;
}



console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]


const words = ["hello", "world", "lighthouse"];
console.log(without(["hello", "world", "lighthouse"], ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
