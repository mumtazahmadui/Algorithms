// Given a string as a valid set of roman numerals, write a function to return the value of the numerals

const romanNumerals = (str) => {
  // initialize total and previous variables to 0
  let total = 0;
  let prev = 0;
  // iterate backwards through the string
  for (let i = str.length - 1; i >= 0; i--) {
    // set temp variable equal to the returned value of the convert helper function
    let temp = convert(str[i]);
    // check temp against previous value
    if(temp < prev) {
      // if temp is less than previous subract temp from total
      total -= temp;
    }
    else{
      // if temp is greater than previous add temp from total
      total += temp;
    }
    // change previous to current temp value
    prev = temp;
  }
  // return total of converted string value
  return total;
}

// convert helper function takes a numeral string character and returns the value that numeral represents
const convert = (char) => {
  if (char === 'I') {
    return 1;
  }
  else if (char === 'V') {
    return 5;
  }
  else if (char === 'X') {
    return 10;
  }
  else if (char === 'L') {
    return 50;
  }
  else if (char === 'C') {
    return 100;
  }
  else if (char === 'D') {
    return 500;
  }
  else if (char === 'M') {
    return 1000;
  }
}

const myNumeral = 'DMCXLIV';
console.log(romanNumerals(myNumeral));