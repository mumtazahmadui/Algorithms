// write a function that takes in a string with spaces on the begining and end of the string. Remove those spaces and capitalize the first letter of each word then return the new string. If the original string contains "Mike" (capitalization matters) break the function immediately and return "stunned silene".

const dropTheMike = (str) => {
  // check original string for "Mike"
  if (str.includes("Mike")) {
    // return if conditional evaluates to true
    return "stunned silence";
  }
  // split string into array removing spaces
  // does not remove spaces on beginning and end
  let splits = str.split(" ");
  let caps = [];
  // iterate through array from first word to last word (excluding spaces on front and back)
  for (let i = 1; i < splits.length - 1; i++) {
    // capitalize first letter of each word with capitalize helper function
    // push returned strings to caps array
    caps.push(capitalize(splits[i]));
  }
  // return string from joining each word from caps array
  return caps.join(" ");
}

// capitalize helper function
const capitalize = (str) => {
  // take first character of string and set it to upper case then concat remainder of given string
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const myStr = " lets get after it mike ";
console.log(dropTheMike(myStr));