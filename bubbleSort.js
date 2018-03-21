// create a function to sort an array using bubble sort then return that array

function bubbleSort(arr) {
  // set counter to end of array
  let count = arr.length - 1;
  // create break case
  while(count > 1){
    // iterate through array
    for(let i = 0; i < arr[count]; i++){
      // swap values if array at i is greater than array at i + 1
      if(arr[i] > arr[i+1]){
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
      }
    }
    // forward progress
    count--;
  }
  return arr;
}

let myArr = [2,6,1,10,4,5,3];
console.log(bubbleSort(myArr));