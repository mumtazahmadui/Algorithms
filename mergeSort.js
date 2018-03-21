// create a function that takes an array and sorts it in NLogN time complexity then return that sorted array

const mergeSort = (arr) => {
  // break case - return array if length is less than 2
  if(arr.length < 2) {
    return arr;
  }
  // set mid index and slice array into left and right halves
  let mid = Math.floor(arr.length/2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  // recurse merge sort on left and right halves then merge them together
  return merge(mergeSort(left),mergeSort(right));
}

// merge helper function
const merge = (arr1, arr2) => {
  // initiate two runner variables and empty result array
  let run1 = 0, run2 = 0;
  let result = [];
  // create forward progress checking to see if runners have reached end of each array
  while(run1 < arr1.length || run2 < arr2.length) {
    // check if value of array1 at runner1 is less than or equal to value of array2 at runner2 or if runner2 has reached the end of array2
    if(arr1[run1] <= arr2[run2] || run2 >= arr2.length) {
      // push array1 value at runner1 to result array then increment runner1
      result.push(arr1[run1]);
      run1++;
    }
    // check if value of array2 at runner2 is less than value of array1 at runner1 or if runner1 has reached the end of array1
    else if(arr2[run2] < arr1[run1] || run1 >= arr1.length) {
      // push array2 value at runner2 to result array then increment runner2
      result.push(arr2[run2]);
      run2++;
    }
  }
  // return result array
  return result;
}

let myArr = [6, 8, 1, 4, 12, 3, 7, 15, 3, 9, 6, 10];
console.log(mergeSort(myArr));