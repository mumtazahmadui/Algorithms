// write a function to determine if given string has valid perenthisis

const isValidPerens = (str) => {
  // create counter for opens and closes
  let open = 0;
  let close = 0;
  // iterate through string
  for (let i = 0; i < str.length; i++) {
    // check for more closes then opens
    if (close > open) {
      // if at any point there are more closes than opens string is invalid
      return false;
    }
    // check for opens and increment
    else if (str[i] === "(") {
      open++;
    }
    // check for closes and increment
    else if (str[i] === ")") {
      close++;
    }
  }
  // check to make sure all opens have closes
  if (open != close) {
    return false;
  }
  // string is valid if passes all conditional checks
  return true;
}

const myStr = "())(((()))";
console.log(isValidPerens(myStr));