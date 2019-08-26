const assertEqual = require('./assertEqual');


const countLetters = function (word) {
  word = word.replace(/ /g, '');
  let array = word.split('');
  let letter = {};
  for (let i = 0; i < array.length; i++) {
    if (letter[array[i]]) {
      letter[array[i]] += 1;
    } else {
      letter[array[i]] = 1;
    }

  }
  return letter;

}


module.exports = countLetters;