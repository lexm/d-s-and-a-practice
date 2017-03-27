// http://www.geeksforgeeks.org/check-large-number-divisible-6-not/

function isDivBySix(n) {
  var str = '' + n;
  var len = str.length;
  if(parseInt(str[len - 1]) % 2) return false;
  var digSum = str.split('').map(Number).reduce(function(acc, cur) {
    return acc + cur;
  });
  if(digSum % 3) return false;
  return true;
}

console.log('Input:\t n = 2112');
var result = isDivBySix(2112) ? 'Yes' : 'No';
console.log('Output:\t ' + result + '\n');

console.log('Input:\t n = 1124');
var result = isDivBySix(1124) ? 'Yes' : 'No';
console.log('Output:\t ' + result + '\n');

console.log('Input:\t n = 363588395960667043875487');
var result = isDivBySix(363588395960667043875487) ? 'Yes' : 'No'; 
console.log('Output:\t ' + result + '\n');
