// const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

module.exports = map;

// const results1 = map(words, word => word[0]);
// console.log(results1);
// const expected = words.map(function(element) {
//   return element[0]; 
// });
// console.log(expected);

// assertArraysEqual(results1, expected, true);
