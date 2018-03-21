// write a function to remove all duplicate values from a given array

const deDupe = (arr) => {
  // create results array
  let result = [];
  // iterate through original array
  for (let i = 0; i < arr.length; i++) {
    // check current iterator value against iterator +1 value
    if (arr[i] != arr[i+1]) {
      // push to results array
      result.push(arr[i]);
    }
  }
  // return results array
  return result;
}

const loseDuplicates = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] == arr[i-1]) {
      arr.pop();
    }
  }
  return arr;
}

// solution using sets
const removeDuplicates = (arr) => {
  // create results array and values set
  let result = [];
  let vals = new Set();
  // iterate through array
  for (let idx in arr) {
    // check if array val is not in set
    if (!vals.has(arr[idx])) {
      // push value to array and add value to set
      result.push(arr[idx]);
      vals.add(arr[idx]);
    }
  }
  // return results array
  return result;
}

const myArr = [1,2,2,"hello","hello",3,3,"goodbye","goodbye",4,4,4,true,true,5,5];
console.log(deDupe(myArr));
console.log(removeDuplicates(myArr));
