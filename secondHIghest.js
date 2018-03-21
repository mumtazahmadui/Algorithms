// Write a function that when given an array of integers, returns the second highest integer in the array.

const secondHighest = (arr) => {
  // initiate highest variable as first value in array and second highest as lowest possible value
  let first = arr[0];
  let second = -Infinity;
  // iterate through the array
  for (let i = 0; i < arr.length; i++) {
    // check if value at iterator is greater than first value, if so change second to first and first to arr[i]
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    }
    // in case first value in the array is the highest value
    if (arr[i] > second && arr[i] != first) {
      second = arr[i];
    }
  }
  // return second highest value in array
  return second;
}

const myArr = [10,3,6,7,3,1,8,4,6];
console.log(secondHighest(myArr));
