// write a program that creates an array 'Y' that contains all the odd numbers between 1 to 255. When the program is done, 'Y' should have the value of [1, 3, 5, 7, ... 255]. Write this iteratively and recursively

// iterative
const oddsArray = () => {
  let result = [];
  for (let i = 1; i < 256; i += 2) {
    result.push(i);
  }
  return result;
}

// recursive
const rOddsArray = (num = 1, res = []) => {
  if (num > 255){
    return res;
  }
  res.push(num);
  return rOddsArray(num += 2, res);
}

console.log(oddsArray());
console.log(rOddsArray());