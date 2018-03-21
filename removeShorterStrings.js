// write a function that takes an array of strings and a length and returns an array without the strings that are shorter than the length given.

const removeShorterStrings = (arr, len) => {
  // create results array
  let result = [];
  // iterate through array
  for (let i = 0; i < arr.length; i++) {
    // check string length
    if (arr[i].length >= len) {
      // add to result array if the string meets length requirements
      result.push(arr[i]);
    }
  }
  // return result array
  return result;
}

const myArr = ["play", "that", "funky", "music", "white", "boy"];
console.log(removeShorterStrings(myArr, 5));