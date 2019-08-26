const assertEqual = require('./assertEqual');

const countOnly = function(allItems, itemsToCount) {
  let count = 0; 
  const results = {};
  
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if(results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
    //console.log(item);
  }
  return results;
}
  
module.exports = countOnly;

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
console.log(result1);