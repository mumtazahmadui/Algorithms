// create two functions, one that when given an array and a specific index position removes the value at that index to shorten the array then return that array, the other that when given an array, an index position and a value, inserts that value at that index and shifts the rest of the array over then return that array.

const removeAt = (arr, idx) => {
  // check to make sure given index is valid
  if(idx >= arr.length || idx < 0){
    return "Index out of bounds of given array";
  }
  // iterate through array starting at given index
  for(let i = idx; i < arr.length - 1; i++){
    // shift array values
    arr[i] = arr[i + 1];
  }
  // shorten array length by 1
  arr.length = arr.length - 1;
  // return array with value removed
  return arr;
}

const insertAt = (arr, idx, val) => {
  // check to make sure given index is valid
  if(idx >= arr.length || idx < 0){
    return "Index out of bounds of given array";
  }
  // increase length of array by 1
  arr.length = arr.length + 1;
  // iterate backwards through array stoping at passed index
  for(let i = arr.length - 1; i > idx; i--){
    // shift array values
    arr[i] = arr[i - 1];
  }
  // set value at iterator to passed value
  arr[i] = val;
  // return array with new value inserted
  return arr;
}