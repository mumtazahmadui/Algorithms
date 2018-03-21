// write a function that given an array of strings removes all the strings with even lengths and returns that same array

const removeEvenStrings = (arr) => {
  // set cut off length
  let cut = arr.length;
  // iterate backwards through array
  for (let i = cut - 1; i >= 0; i--) {
    // check length of string at i
    if (arr[i].length % 2 === 0) {
      // move even strings to end of array with swap helper function
      for (let k = i; k < cut; k++) {
        swap(arr,k,k+1);
      }
      // decrement cut off length
      cut--;
    }
  }
  // shorten array to cut off length then return the array
  arr.length = cut;
  return arr;
}

// swap helper function
const swap = (arr,i,j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const myArr = ["play", "that", "funky", "music", "white", "boy"];
console.log(removeEvenStrings(myArr));