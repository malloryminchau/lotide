const findKey = function(object, callback) {
  let stopLoop = false;
  for(let element in object) {
    if((callback(object[element]) === true) && stopLoop === false) {
      console.log(element);
      stopLoop = true;
    }
  }
}

module.exports = findKey;
