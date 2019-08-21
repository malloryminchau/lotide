const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};


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


console.log(countLetters("lighthouse in the house"));