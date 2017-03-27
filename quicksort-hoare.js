var testArr = [3, 52, 7, 4, 3, 2, 1, 65, 6];

function swap(arr, ctr1, ctr2) {
  var temp = arr[ctr1];
  arr[ctr1] = arr[ctr2];
  arr[ctr2] = temp;
}

function quicksort(arr, first, last) {
  if(first < last) {
    var p = partition(arr, first, last);
    quicksort(arr, first, p);
    quicksort(arr, p + 1, last);
  }
}

function partition(arr, first, last) {
  pivot = arr[first];
  console.log('first: ', first, 'last: ', last);
  i = first - 1;
  j = last + 1;
  while (true) {
    do {
      i++
    } while (arr[i] < pivot);
    do {
      j--
    } while (arr[j] > pivot);
    console.log('i: ', i, 'j: ', j);
    if(i >= j) {
      console.log('array: ', arr);
      return j;
    }
    swap(arr, i, j);
  }
}

function qsort(arr) {
  quicksort(arr, 0, arr.length - 1);
}

console.log(testArr);
qsort(testArr);
console.log(testArr);
