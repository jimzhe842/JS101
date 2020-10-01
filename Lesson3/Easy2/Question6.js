let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

let test = [["Barney", "Betty"],["Bambam", "Pebbles"]]
console.log(...test);
console.log([].concat(...test));

let names = flintstones.splice(2);
names.forEach(arr => arr.forEach(name => flintstones.push(name)));

console.log(flintstones);