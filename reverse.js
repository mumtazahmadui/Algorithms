// write two separate functions: one to reverse an array (without creating a new array) and another to reverse a string.

const revArr = (arr) => {
  // iterate to half of array
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    // swap iterator value with value equal to distance of iterator from the end of array
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  // return reversed array
  return arr;
}

const revStr = (str) => {
  // create result string
  let result = '';
  // iterate backwards through string
  for (let i = str.length - 1; i >= 0; i--) {
    // add iterator character to result string
    result += str[i];
  }
  // return result string
  return result;
}

const myArr = [1,2,3,4,5,6,7];
const myStr = 'Hello World!';

console.log(revArr(myArr));
console.log(revStr(myStr));