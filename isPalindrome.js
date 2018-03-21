// write a function to return true if given string is a palindrome (ignoring capitalization but not spaces) or return false if given string is not palindrome.

const isPalindrome = (str) => {
  // create front and back iterators
  let front = 0;
  let back = str.length - 1;
  // loop through string from either side
  while (front < back) {
    // check front verse back ignoring capitalization
    if (str[front].toLowerCase() != str[back].toLowerCase()) {
      return false;
    }
    // increment front / decrement back
    front++;
    back--;
  }
  // string is valid palindrome if function breaks while loop
  return true;
}

const myStr = "Racecar";
console.log(isPalindrome(myStr));