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

module.exports = eqObjects;
