var testArr = [3, 52, 7, 4, 3, 2, 1, 65, 6];

function swap(arr, ctr1, ctr2) {
  var temp = arr[ctr1];
  arr[ctr1] = arr[ctr2];
  arr[ctr2] = temp;
}

function quicksort(arr, first, last) {
  var p;
  if(arr.length > 1) {
    p = partition(arr, first, last);
    if(first < p - 1) {
      quicksort(arr, first, p - 1);
    }
    if(p < last) {
      quicksort(arr, p, last);
    }
  }
  return arr;
}

function partition(arr, first, last) {
  pivot = arr[Math.floor((first + last) / 2)];
  console.log('first: ', first, 'last: ', last);
  i = first;
  j = last;
  while (i <= j) {
    while (arr[i] < pivot) {
      i++
    };
    while (arr[j] > pivot) {
      j--
    };
    console.log('i: ', i, 'j: ', j);
    if(i <= j) {
      swap(arr, i, j);
      i++;
      j--;
    }
  }
  console.log('array: ', arr);
  return i;
}

function qsort(arr) {
  return quicksort(arr, 0, arr.length - 1);
}

console.log(testArr);
qsort(testArr);
console.log(testArr);
