// Create an array and fill the array with 10 values, each value being a random integer between 0 to 100.  For example when your program is done, the array could be something like this: [35, 15, 3, 39, 53, 93, 25, 39, 59, 21].

const randomArray = () => {
  // create result array
  let result = [];
  // iterate to ten
  for (let i = 0; i < 10; i++) {
    // generate random integer
    let temp = Math.floor(Math.random() * 100);
    // push to result array
    result.push(temp);
  }
  // return result
  return result;
}

console.log(randomArray());