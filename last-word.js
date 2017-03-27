var testString = "This is the string; gimme the length of the last word";
var testString2 = "Here's a tougher proj3ct ! &* .";

function hasAlphNum(string) {
  var alphNum = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  for(var ctr = 0; ctr < string.length; ctr++) {
    if(alphNum.indexOf(string[ctr]) !== -1) {
      return true;
    }
  }
  return false;
}

function lastWordLength(string) {
  var i = string.length - 1;
  var end = string.length;
  var temp;
  do {
    while(i >= 0 && string[i] !== ' ') {
      i--;
    }
    temp = '';
    for(j = i + 1; j < end; j++) {
      temp += string[j];
    }
    if(hasAlphNum(temp)) {
      return temp.length;
    } else {
      end = i;
      i--;
    }
  } while(i >= 0);
  return 0;
}

console.log(lastWordLength(testString2));
