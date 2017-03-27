var testArr = [3, 52, 7, 4, 3, 2, 1, 65];

function lowestIntNotIn(array) {
  var len = array.length;
  for(i = 0; i < len; i++) {
    var cur = Math.abs(array[i]) - 1;
    if(cur < len && array[cur] > 0) {
      array[cur] = array[cur] * -1;
    }
  }
  for(i = 0; i < len; i++) {
    if(array[i] > 0) return i + 1;
  }
}

console.log(lowestIntNotIn(testArr));
