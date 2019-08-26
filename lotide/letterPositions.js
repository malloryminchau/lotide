const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  let array = sentence.split('');
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== " ") {
      if (results[array[i]]) {
        results[array[i]].push(i);
      } else {
        results[array[i]] = [i];
      }
    }

  }
  return results;
};

module.exports = letterPositions;
