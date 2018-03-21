// write a function that takes in a string and returns an acronym of that given string in all caps

const acronyms = (str) => {
  // create result string with first character of given string
  let result = str[0];
  // iterate through rest of string
  for (let i = 1; i < str.length; i++) {
    // check for spaces
    if (str[i] === " ") {
      // add character following space to result string
      result += str[i+1];
    }
  }
  // return result in all caps
  return result.toUpperCase();
}

const myStr = "play that funky music white boy";
console.log(acronyms(myStr));