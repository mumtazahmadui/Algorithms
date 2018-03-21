// given a sorted array of duplicate numbers find the one number without a duplicate and return that value. If the array has no solo value, return false

const findSolo = (arr) => {
  // set variables for middle index and last index
  let mid = Math.floor(arr.length/2);
  let rIdx = arr.length - 1;
  // iterate to mid index counting my twos
  for(let i = 0; i < mid; i += 2) {
    // check left set for matching values
    if(arr[i] != arr[i + 1]) {
      // return solo
      return arr[i];
    }
    // check right set for matching values
    if(arr[rIdx] != arr[rIdx - 1]) {
      // return solo
      return arr[rIdx];
    }
    // decrement right side index
    rIdx -= 2;
  }
  // return false if no solo was found
  return false;
}

const myArr = [1,1,2,2,3,3,4,5,5,6,6];
console.log(findSolo(myArr));