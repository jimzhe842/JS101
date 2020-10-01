let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

console.log([...statement1.matchAll('t')].length);
console.log([...statement2.matchAll('t')].length);