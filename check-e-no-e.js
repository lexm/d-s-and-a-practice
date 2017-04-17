var testStr1 = 'Hello, World!';
var testStr2 = 'Greetings, World!';

var char1 = 'e';
var char2 = 'E';

// var ch1 = parseInt('0x' + char1);
// var ch2 = parseInt('0x' + char2);
// var ch1 = char1.charCodeAt(0);
// var ch2 = char2.charCodeAt(0);

// console.log(ch1, ch2);
// console.log(ch1 ^ 101);

function ltrNotHere(string) {
  for(var ctr0 = 0; ctr0 < string.length; ctr0++) {
    if(parseInt('0x' + string[ctr0]) === 14) {
      return true;
    }
  }
  return false;
}

console.log(testStr1, ltrNotHere(testStr1));
console.log(testStr2, ltrNotHere(testStr2));
