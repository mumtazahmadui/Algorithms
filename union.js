// create a function that takes two arrays and returns a merged array without duplicates

const union = (arr1, arr2) => {
  // create empty object
  let obj = {};
  // if arrays are different lengths, checks to see witch is longer
  if(arr1.length >= arr2.length) {
    // if array 1 is longer iterates to end of array 2
    for(var i = 0; i < arr2.length; i++) {
      // adds key value pairs to object with keys representing array values
      obj[arr1[i]] = typeof arr1[i];
      obj[arr2[i]] = typeof arr2[i];
    }
    // starts where first iterator left off and iterates to the end of array 1 to add remaining values
    for(let j = i; j < arr1.length; j++) {
      obj[arr1[j]] = typeof arr1[j];
    }
  }
  else{
    // if array 2 is longer iterates to end of array 1
    for(var i = 0; i < arr1.length; i++) {
      // adds key value pairs to object with keys representing array values
      obj[arr1[i]] = typeof arr1[i];
      obj[arr2[i]] = typeof arr2[i];
    }
    // starts where first iterator left off and iterates to the end of array 2 to add remaining values
    for(let j = i; j < arr2.length; j++) {
      obj[arr2[j]] = typeof arr2[j];
    }
  }
  // create empty results array
  let result = [];
  // itereate through keys of object
  for(key in obj) {
    // push keys to results array after converting from string to number
    result.push(parseInt(key));
  }
  // return result array
  return result;
}

let myArr1 = [1,3,5,7];
let myArr2 = [2,3,6,7,8,9];
console.log(union(myArr1,myArr2));