// Write a program that inserts a new number X at an index Y. For example if array = [1, 3, 5, 7] and X = 10, and Y = 2, by the end of your program array should be [1, 3, 10, 5, 7] (in other words we added '10' on index 2). If passed Y index is out of bounds of array simply push X onto the end of the array. If Y index is negative add X value Y index from end of array.

const xInY = (arr, x, y) => {
  if (y > arr.length - 1) {
    arr.push(x);
    return arr;
  }
  else if (y < 0 && Math.abs(y) > arr.length) {
    let temp = Math.abs(y % arr.length);
    arr[arr.length - temp] = x;
    return arr;
  }
  else if (y < 0) {
    arr[arr.length - (Math.abs(y))] = x;
    return arr;
  }
  arr[y] = x;
  return arr;
}

const myArr = [1, 3, 5, 7];
// console.log(xInY(myArr, 10, 2));
// console.log(xInY(myArr, 10, 10));
// console.log(xInY(myArr, 10, -2));
// console.log(xInY(myArr, 10, -10));