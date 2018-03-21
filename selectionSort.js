// write a function to sort an array using selection sort then return the sorted array.

const selectSort = (arr) => {
  // establish current index to act as partition
  let cur = 0;
  // iterate through remainder of array
  while(cur < arr.length) {
    // establish min value index
    let minIdx = cur;
    // iterate through remainder of array
    for(let i = cur + 1; i < arr.length; i++){
      // check min value at index against iterator index value
      if(arr[i] < arr[minIdx]) {
        // set min index at iterator if iterator value is less then current min index value
        minIdx = i;
      }
    }
    // Fisher-Yates swap
    let temp = arr[cur];
    arr[cur] = arr[minIdx];
    arr[minIdx] = temp;
    // incriment current index
    cur++;
  }
  // return sorted array
  return arr;
}

let myArr = [6,1,12,18,4,3,8,2,10,4];
console.log(selectSort(myArr));