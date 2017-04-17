const assert = require('assert');

const l3tt3rNotH3r3 = (string) =>
  !string.split('').find((char) => ('0x' + char) * 1 === 14);

assert(!l3tt3rNotH3r3('Hello, World!'));
assert(l3tt3rNotH3r3('Hi, World!'));
assert(!l3tt3rNotH3r3('Big E'));
assert(l3tt3rNotH3r3('nothing'));
assert(l3tt3rNotH3r3(''));
assert(!l3tt3rNotH3r3('I\'m here'));
assert(l3tt3rNotH3r3('I\'m not'));
console.log('Woo Hoo!');
