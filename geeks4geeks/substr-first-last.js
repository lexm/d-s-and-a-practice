// http://www.geeksforgeeks.org/count-substrings-with-same-first-and-last-characters/

var testStr = 'abcab';

function fLast(string) {
  var len = string.length;
  var ctr = 0;
  for(i = 0; i < len; i++) {
    var c1 = string[i];
    for(j = i; j < len; j++) {
      if(string[j] === c1) {
        ctr++;
      }
    }
  }
  return ctr;
}

function fLast2(string) {
  var ctr = 0;
  var obj = {};
  for(var i = 0; i < string.length; i++) {
    if(!obj.hasOwnProperty(string[i])) {
      obj[string[i]] = 1;
    } else {
      obj[string[i]] += 1;
    }
  }
  return Object.keys(obj).reduce(function(acc, cur) {
    return acc + (obj[cur] * (obj[cur] + 1) / 2);
  }, 0)
}

console.log(fLast2(testStr));
