const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  }
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
    
  }
  return true;
}

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
    
  for (var key in object1) {
    if (Array.isArray(object1[key]) === true) {
      if (eqArrays(object1[key], object2[key]) !== true) {
        return false;
      }
    }else {
      if (object1[key] !== object2[key]) {
        return false;
      } 
    } 
  }
  return true;
}

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(object1, object2, expected) {
  const inspect = require('util').inspect;
  let actual = eqObjects(object1, object2);
  
  if (actual === expected) {
    console.log(`Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
  
};


const ab = { a: "1", b: "2", c: "3"};
const ba = { b: "2", a: "1", c: "3" };
//console.log(eqObjects(ab, ba)); // => true

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false
assertObjectsEqual(ab, ba, true);
