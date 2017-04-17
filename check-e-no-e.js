const assert = require('assert');

var testStr1 = 'Hello, World!';
var testStr2 = 'Hi, World!';

const ltrNotH3r3 = (string) =>
  !string.split('').find((char) => ('0x' + char) * 1 === 14);

assert(!ltrNotH3r3('Hello, World!'));
assert(ltrNotH3r3('Hi, World!'));
assert(!ltrNotH3r3('Big E'));
assert(ltrNotH3r3('nothing'));
assert(ltrNotH3r3(''));
assert(!ltrNotH3r3('I\'m here'));
assert(ltrNotH3r3('I\'m not'));
console.log('Woo Hoo!');
