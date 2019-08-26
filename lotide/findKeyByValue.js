const findKeyByValue = function(shows, value) {
  return Object.keys(shows).find(key => shows[key] === value);
}

module.exports = findKeyByValue;
