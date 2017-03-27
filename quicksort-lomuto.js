var testArr = [3, 52, 7, 4, 3, 2, 1, 65, 6];

function swap(arr, ctr1, ctr2) {
  var temp = arr[ctr1];
  arr[ctr1] = arr[ctr2];
  arr[ctr2] = temp;
}

function quicksort(arr, first, last) {
  if(first < last) {
    var p = partit(arr, first, last);
    quicksort(arr, first, p - 1);
    quicksort(arr, p + 1, last);
  }
}

function partit(arr, first, last) {
  console.log('first: ', first, 'last: ', last);
  console.log('array before: ', arr);
  var pivot = arr[last];
  console.log('pivot: ', pivot);
  var i = first - 1;
  for(var j = first; j < last; j++) {
    if(arr[j] <= pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, last);
  return i + 1;
}

function qsort(arr) {
  quicksort(arr, 0, arr.length -1)
}

console.log(testArr);
qsort(testArr);
console.log(testArr);
