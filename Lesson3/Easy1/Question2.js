let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

function endsInExclamation(string) {
  return string.slice(-1) === "!";
}

console.log(endsInExclamation(str1));
console.log(endsInExclamation(str2));
str1.endsWith("!");
str2.endsWith("!");