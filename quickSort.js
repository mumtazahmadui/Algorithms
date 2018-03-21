// create a function that takes an array and sorts it in NLogN time complexity then return that sorted array

// initiate quicksort algorithm defaulting left and right arguments
const quickSort = (arr, left = 0, right = arr.length - 1) => {
  // get pivot from partition helper function
  let pivot = partition(arr, left, right);
  // check left against pivot - 1
  if(left < pivot - 1) {
    // recurse quickSort on left side
    quickSort(arr, left, pivot - 1);
  }
  // check right against pivot
  if(right > pivot) {
    // recurse quicksort on right side
    quickSort(arr, pivot, right);
  }
  // return sorted array
  return arr;
}

// partition helper function
const partition = (arr, left, right) => {
  // set pivot to middle index of array
  let pivot = Math.floor((left + right) / 2);
  // create progress to check left against right indicies
  while(left <= right) {
    // check left value against pivot value
    while(arr[left] < arr[pivot]) {
      // increment left
      left++;
    }
    // check right value against pivot value
    while(arr[right] > arr[pivot]) {
      // decrement right
      right--;
    }
    // when left value is greater than pivot value and right value is less than pivot value check if left is less than or equal to right
    if(left <= right) {
      // swap left and right values
      swap(arr, left, right);
      // increment left, decrement right
      left++;
      right--;
    }
  }
  // return left index as pivot index
  return left;
}

// helper function to swap two indicies in given array
// Fisher-Yates swap
const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let myArr = [6, 8, 1, 4, 12, 3, 7, 15, 3, 9, 6, 10];
console.log(quickSort(myArr));