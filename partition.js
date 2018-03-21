// create a partition function that takes an array and shifts all values less than partition value to the left and all values greater than partition value to the right then return the index position of the partition

// initialize left and right values defaulting to each end of the array
const partition = (arr, left = 0, right = arr.length - 1) => {
  // set pivot as right bounds and iterator as left bounds
  let pivot = right;
  let i = left;
  // iterate through indicies in range of left and right bounds
  for(let j = left; j < right; j++) {
    // check value at current index against value of pivot index
    if(arr[j] <= arr[pivot]) {
      // if less than or equal to swap the values
      swap(arr, i, j);
      // incriment iterator
      i++;
    }
  }
  // swap current iterator index value with pivot index value
  swap(arr, i, j);
  // return iterator index which is now pivot(partition) index
  return i;
}

// helper function to swap values at given indicies
// Fisher-Yates swap
const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}