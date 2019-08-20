const args = process.argv;
const newArgs = args.slice(2);

function reverse(newArgs) {
  var string = "";
  for (var i = 0; i < newArgs.length; i++) {
    newString = "";
    string = newArgs[i];
    for( var j = string.length - 1; j >= 0; j--) {
      newString += string[j];
    }
    console.log(newString);
  }
}

reverse(newArgs);