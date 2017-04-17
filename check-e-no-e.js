const assert = require('assert');

var testStr1 = 'Hello, World!';
var testStr2 = 'Hi, World!';

function ltrNotH3r3(string) {
  var array = string.split('');
  for(var dun = !!0; !dun;) {
    var char = array.pop();
    if(!char) {
      dun = !0
    }
    // if(!dun && (('0x' + char) * 1).toString(10) === '14') {
    if(!dun && ('0x' + char) * 1 === 14) {
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
