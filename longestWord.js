// Write a function that when given a string of words, returns the longest word in the string.

const longestWord = (str) => {
  // initialize result string and array of words from given string
  let result = "";
  let words = str.split(" ");
  // iterate through words array
  for (let i = 0; i < words.length; i++) {
    // check length of iterator value in words array against current result string
    if (words[i].length > result.length) {
      // set result string to longest word
      result = words[i];
    }
  }
  // return longest word
  return result;
}

const myStr = "Hello how are you doing today?";
console.log(longestWord(myStr));