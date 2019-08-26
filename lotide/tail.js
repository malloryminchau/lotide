const assertEqual = require('./assertEqual');

const tail = function(actual) {
  const newArray = actual.slice(1);
  return newArray;
};

module.exports = tail;

