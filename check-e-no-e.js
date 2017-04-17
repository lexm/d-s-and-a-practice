const assert = require('assert');

function ltrNotH3r3(string) {
  var array = string.split('');
  for( ; !0; ) {
    var char = array.pop();
    if(!char) {
      break;
    }
    if((('0x' + char) * 1).toString(10) === '14') {
      return !!0;
    }
  }
  return !0;
}

assert(!ltrNotH3r3('Hello, World!'));
assert(ltrNotH3r3('Hi, World!'));
assert(!ltrNotH3r3('Big E'));
assert(ltrNotH3r3('nothing'));
assert(ltrNotH3r3(''));
assert(!ltrNotH3r3('I\'m here'));
assert(ltrNotH3r3('I\'m not'));
console.log('Woo Hoo!');
