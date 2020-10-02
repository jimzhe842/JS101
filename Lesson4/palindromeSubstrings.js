// PROBLEM:

// Given a string, write a function `palindromeSubstrings` which returns
// all the substrings from a given string which are palindromes. Consider
// palindrome words case sensitive.

// Test cases:

// console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
// should return: ["ili"]
//
// console.log(palindromeSubstrings("abcddcbA"))
// should return: ["bcddcb", "cddc", "dd"]
//
// console.log(palindromeSubstrings("palindrome"))
// should log: []
//
// console.log(palindromeSubstrings("")) == []
// should log: []


function isPalindrome(substring) {
  let length = substring.length;
  if (length <= 1) return false;
  let endIndex = Math.floor(length / 2);
  for (let i = 0; i < endIndex; i++) {
    let firstLetter = substring[i];
    let secondLetter = substring[length - i - 1];
    if (firstLetter !== secondLetter) {
      return false;
    }
  }
  return true;
}


function palindromeSubstrings(string) {
  let length = string.length;
  let palindromes = [];
  for (let i = 0; i < length; i++) {
    for (let j = i; j < length; j++) {
      let substring = string.slice(i,j+1);
      console.log(substring, isPalindrome(substring));
      if (isPalindrome(substring)) palindromes.push(substring);
    }
  }
  return palindromes;
}

console.log(palindromeSubstrings("abcddcbA"));
console.log(palindromeSubstrings(''));