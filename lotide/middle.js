const middle = function(array) {
  let mid = [];
  if (array.length < 3) {
    return mid;
  } else if ((array.length % 2) === 0) {
    let midIndexTwo = (array.length / 2);
    let midIndexOne = midIndexTwo - 1;
    mid.push(array[midIndexOne]);
    mid.push(array[midIndexTwo]);
  } else if ((array.length %2) !== 0) {
    let midIndex = (array.length - 1) /2;
    mid.push(array[midIndex]);
  }
  return mid;
}
module.exports = middle;
