// given a string of characters and integers return an number containting all integers from the string in order as a valid number. Example -> the string "0s1a3y5w7h9a2t4?6!8?0" would return 1357924680. Notice the zero on the begining drops off because no valid number is preceded by zero.

const getDigits = (str) => {
  // create variables to keeps track of the tens multiplier and the number to return
  let tens = 1;
  let num = 0;
  // iterate backwards through the string
  for (let i  = str.length; i >= 0; i--) {
    // + operator takes the numerical value of the object it preceeds
    // convert back to string to check against original character
    // if character is a number this conditional will evaluate to true
    if((+str[i]).toString() === str[i]) {
      // create temp variable to hold parsed character as integer
      let temp = parseInt(str[i]);
      // apply tens multiplier
      temp *= tens;
      // add value to return number
      num += temp;
      // inrement tens multiplier
      tens *= 10;
    }
  }
  // return full number
  return num;
}

const myStr = "0s1a3y5w7h9a2t4?6!8?0";
console.log(getDigits(myStr));