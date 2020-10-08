function isOdd(number) {
  return Math.abs(number) % 2 === 1;
}

// for (let i = 1; i <= 99; i += 2) {
//   console.log(i);
// }

// for (let i = 2; i <= 99; i += 2) {
//   console.log(i);
// }

let readline = require('readline-sync');

// readline.question("Option 1, Option 2, Option 3");

// multiply(multiply(n,n),multiply(n,multiply(n,n)));

// function xor(value1,value2) {
//   return (!value1 === !!value2);
// }

// console.log(xor(5, 0) === true);
// console.log(xor(false, true) === true);
// console.log(xor(1, 1) === false);
// console.log(xor(true, true) === false);

// function oddities(array) {
//   return array.filter((_,index) => index % 2 === 0);
// }

// console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
// console.log(oddities(["abc", "def"])); // logs ['abc']
// console.log(oddities([123])); // logs [123]
// console.log(oddities([])); // logs []

function stringToInteger(string) {
  return string - 0;
}

// function stringToInteger(string) {
//   const DIGITS = {
//     0: 0,
//     1: 1,
//     2: 2,
//     3: 3,
//     4: 4,
//     5: 5,
//     6: 6,
//     7: 7,
//     8: 8,
//     9: 9
//   };
//   let numberArr = string.split('').map(char => DIGITS[char]);
//   let value = 0;
//   numberArr.forEach(num => (value = (value * 10) + num));
//   return value;
// }

// console.log(stringToInteger("4321") === 4321); // logs true
// console.log(stringToInteger("570") === 570); // logs true

// function hexadecimalToInteger(string) {
//   const DIGITS = {
//     0: 0,
//     1: 1,
//     2: 2,
//     3: 3,
//     4: 4,
//     5: 5,
//     6: 6,
//     7: 7,
//     8: 8,
//     9: 9,
//     'A': 10,
//     'B': 11,
//     'C': 12,
//     'D': 13,
//     'E': 14,
//     'F': 15
//   };
//   let numberArr = string.split('').map(char => DIGITS[char.toUpperCase()]);
//   let value = 0;
//   console.log(numberArr);
//   numberArr.forEach(num => (value = (value * 16) + num));
//   return value;
// }

// console.log(hexadecimalToInteger('4D9f') === 19871);


// function integerToString(number) {
//   let DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//   let str = '';
//   do {
//     str = (DIGITS[number % 10]) + str;
//     number = Math.floor(number / 10);
//   } while (number > 0);
//   return str;
// }

// console.log(integerToString(4321));      // "4321"
// console.log(integerToString(0));         // "0"
// console.log(integerToString(5000));      // "5000"
// console.log(integerToString(1234567890));      // "1234567890"

// function crunch(string) {
//   let newString = '';
//   while (string.length > 0) {
//     let char = string[0];
//     newString += char;
//     while (string[0] === char) {
//       string = string.slice(1);
//     }
//   }
//   return newString;
// }

// function crunch(string) {
//   let stringArr = string.split('');
//   return stringArr.filter((char,index) => char !== stringArr[index+1]).join('');
// }

// function crunch(string) {
//   let stringArr = string.split('');
//   return stringArr.reduce((newString,char) => {
//     if (char !== newString[newString.length - 1]) {
//       newString += char;
//     }
//     return newString;
//   }, '');
// }

// console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
// console.log(crunch('4444abcabccba'));              // "4abcabcba"
// console.log(crunch('ggggggggggggggg'));            // "g"
// console.log(crunch('a'));                          // "a"
// console.log(crunch(''));                           // ""


// function findFibonacciIndexByLength(length) {
//   let prev = 1;
//   let current = 1;
//   let iterations = 2;
//   while (String(current).length < length) {
//     let prevHolder = prev;
//     prev = current;
//     current += prevHolder;
//     iterations++;
//   }
//   return iterations;
// }

// console.log(findFibonacciIndexByLength(2));       // 7
// console.log(findFibonacciIndexByLength(10));      // 45
// console.log(findFibonacciIndexByLength(16));      // 74

// Don't try any higher values until you read the solution Discussion

// function triangle(sideLength) {
//   for (let i = 1; i <= sideLength; i++) {
//     console.log(`${' '.repeat(sideLength - i)}${'*'.repeat(i)}`);
//   }
// }

// triangle(5);
// triangle(9);

// function twice(num) {
//   let stringNum = String(num);
//   if (stringNum.length % 2 === 0 && (stringNum.slice(0,stringNum.length / 2) === stringNum.slice(stringNum.length / 2))) {
//     return num;
//   } else {
//     return num * 2;
//   }
// }

// console.log(twice(37));
// console.log(twice(44));
// console.log(twice(334433));
// console.log(twice(444));
// console.log(twice(107));
// console.log(twice(103103));
// console.log(twice(3333));
// console.log(twice(7676));

// function cleanUp(string) {
//   const VALID_CHARS = 'qwertyuiopasdfghjklzxcvbnm';
//   let cleanString = '';
//   while (string.length > 0) {
//     let currentChar = string[0].toLowerCase();
//     if (!VALID_CHARS.includes(currentChar)) {
//       if (string[1] === undefined || VALID_CHARS.includes(string[1].toLowerCase())) {
//         cleanString += ' ';
//       }
//     } else {
//       cleanString += string[0];
//     }
//     string = string.slice(1);
//   }
//   return cleanString;
// }

// console.log(cleanUp("---what's my +*& line?"));    // " what s my line "

// function century(num) {
//   let century = Math.ceil(num / 100);
//   switch (century % 20) {
//     case 1:
//       return `${century}st`;
//     case 2:
//       return `${century}nd`;
//     case 3:
//       return `${century}rd`;
//     default:
//       return `${century}th`;
//   }
// }

// console.log(century(2000));
// console.log(century(2001));
// console.log(century(1965));
// console.log(century(256));
// console.log(century(5));
// console.log(century(10103));
// console.log(century(1052));
// console.log(century(1127));
// console.log(century(11201));

function removeNonLetterNumbers(string) {
  let newString = '';
  for (let idx = 0; idx < string.length; idx++) {
    if (isLetter(string[idx]) || isNumber(string[idx])) {
      newString += string[idx];
    }
  }
  return newString;
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isNumber(char) {
  return char >= '0' && char <= '9';
}

function wordSizes(string) { // This returns the unique words;
  let wordArr = {};
  let trackedWords = [];
  if (string === '') {
    return wordArr;
  }
  let stringArr = string.split(' ');
  stringArr.forEach(word => {
    if (!trackedWords[word]) {
      trackedWords[word] = true;
      let length = word.length
      if (!wordArr[length]) {
        wordArr[length] = 0;
      }
      wordArr[length]++;
    }
  })
  return wordArr;
}


console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}


function swap(sentence) {
  return sentence.split(' ').map(word => {
    if (word.length === 1) {
      return word;
    } else {
      return `${word[word.length-1]}${word.slice(1,-1)}${word[0]}`
    }
  }).join(' ');
}


function dms(number) {
  let degrees = Math.floor(number);
  let rest = (number % 1) * 60;
  let minutes = Math.floor(rest);
  let seconds = Math.floor((rest % 1) * 60);
  console.log(`${degrees}˚${minutes}'${seconds}"`);
}

dms(30);           // 30°00'00"


function sumOfSums(arr) {
  return arr.map((number,index) => arr.slice(0,index + 1).reduce((sum,value) => sum + value, 0)).reduce((sum, value) => sum + value, 0);
}

console.log(sumOfSums([3,5,1,]));


function removeVowels(arr) {
  let vowels = 'aeiou'; // Need to include uppercase or convert char to lowercase;
  return arr.map(string => string.split('').filter(char => !vowels.includes(char)).join(''));
}

console.log(removeVowels(['abc','aeioudoge','aabbcc']));


function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return [];
  let newArr = arr.slice();
  newArr.push(newArr.shift());
  return newArr;
}

console.log(rotateArray([1,2,3]));

function rotateRightmostDigits(num,idx) {
  let arr = String(num).split('');
  let number = arr.splice(-idx,1);
  arr.push(number);
  return Number(arr.join(''));
}

console.log(rotateRightmostDigits(735291, 1));      // 735291

function minilang(string) {
  let tokensArr = string.split(' ');
  let stack = [];
  let register = 0;
  tokensArr.forEach(token => {
    switch (token) {
      case "PUSH":
        stack.push(register);
        break;
      case "ADD":
        // console.log(register);
        let number = stack.pop();
        register += Number(number); //Number(stack.pop());
        break;
      case "SUB":
        register -= stack.pop();
        break;
      case "MULT":
        register *= stack.pop();
        break;
      case "DIV":
        register = Math.floor(register / stack.pop());
        break;
      case "MOD":
        register = Math.floor(register % stack.pop());
        break;
      case "POP":
        register = Number(stack.pop());
        break;
      case "PRINT":
        console.log(register);
        break;
      default:
        register = Number(token);
    }
  })
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)

function testFor(string) {
  for (let i = 0; i < 5; i++) {
    if (string[i] === 'a') {
      return "Error"
    }
  }
}

console.log(testFor('tag'));
console.log(testFor('tg'));


let memoize = {};

function fibonacci(nth) {  
  if (nth <= 2) {
    return 1;
  } else if (memo[nth]) {
    return memo[nth]
  }
  let left = fibonacci(nth - 1);
  let right = fibonacci(nth - 2);
  memoize[nth] = left + right;
  return left + right;
}


function letterPercentages(string) {
  let stringLength = string.length;
  return {
    lowercase: (((string.match(/[a-z]/g) || []).length / stringLength) * 100).toFixed(2),
    uppercase: (((string.match(/[A-Z]/g) || []).length / stringLength) * 100).toFixed(2),
    lowercase: (((string.match(/[^a-z]/gi) || []).length / stringLength) * 100).toFixed(2),
  }
}

function triangle(side1,side2,side3) {
  let sum = side1 + side2 + side3;
  let max = Math.max(side1, side2, side3);
  let min = Math.min(side1, side2, side3);
  if (!(max < (sum - max))) {
    return "invalid";
  } else if (min <= 0) {
    return "invalid";
  }
  let ratio1 = side1 / side2;
  let ratio2 = side2 / side3;
  if (ratio1 === 1 && ratio2 === 1) {
    return "equilateral";
  } else if (ratio1 === 1 || ratio2 === 1) {
    return "isosceles";
  } else {
    return "scalene";
  }
}

function triAngles(angle1, angle2, angle3) {
  let max = Math.max(angle1, angle2, angle3);
  let min = Math.min(angle1, angle2, angle3);
  if (min <= 0) {
    return "invalid";
  } else if (angle1 + angle2 + angle3 != 180) {
    return "invalid";
  }
  if (max > 90) {
    return "obtuse";
  } else if (max === 90) {
    return "right";
  } else {
    return "acute";
  }
}

function featured(number) {
  if (number >= 9876543201) {
    return "There is no possible number that fulfills those requirements.";
  }
  function isUnique(number) {
    let trackedNumbers = [];
    let arr = String(number).split('');
    for (let idx = 0; idx < arr.length; idx++) {
      if (trackedNumbers.includes(arr[idx])) {
        return false;
      } else {
        trackedNumbers.push(arr[idx]);
      }
    }
    return true;
  }
  function isDivisibleAndOdd(number) {
    return (number % 7 === 0) || (number % 2 === 1);
  }
  number++; // Increment the number to the closest multiple of 7 and then increment by 7 in the loop;
  while (!(isDivisibleAndOdd(number) && isUnique(number))) { // Not the most efficient;
    number = number + 1; // Also needs to be an odd number!
  }
  return number;
}

console.log(featured(997));

function bubbleSort(arr) {
  let swaps = 0
  do {
    swaps = 0;
    for (let idx = 0; idx <= (arr.length - 1); idx++) {
      if (arr[idx] > arr[idx + 1]) {
        [arr[idx], arr[idx + 1]] = [arr[idx + 1], arr[idx]];
        swaps++;
      }
    }
  } while (swaps > 0);
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

  function longestSentence(text) {
    let sentences = text.match(/\w.*?[.!?]/g);
    console.log(sentences);
    let longest = sentences.reduce(
      function(longest, sentence) {
        let length = sentence.split(/\s/).length;
        if (length > longest.length) {
          return { text: sentence, length: length };
        } else {
          return longest;
        }
      },
      { text: "", length: 0 }
    );
  
    console.log(longest.text + "\n");
    console.log("The longest sentence has " + longest.length + " words.\n");
  }



  longestSentence(longText);

  function range(x,y) {
    console.log(x,y);
  }


  function range(x,y) {
    console.log(x,y);
  }

  range(5,10);
  range(5);