const findKeyByValue = function(shows, value) {
  return Object.keys(shows).find(key => shows[key] === value);
}

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  let stopLoop = false;
  for(let element in object) {
    if((callback(object[element]) === true) && stopLoop === false) {
      console.log(element);
      stopLoop = true;
    }
  }
}



findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

