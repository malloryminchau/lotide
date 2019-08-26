const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!


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

module.exports = assertObjectsEqual;

