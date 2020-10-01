let str = "The Flintstones Rock!";
for (let i = 0; i < 10; i++) {
  console.log(str);
  str = ' ' + str;
}

for (let padding = 0; padding < 10; padding++) {
  console.log(' '.repeat(padding) + "The Flintstones Rock!");
}