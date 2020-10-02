let statement = "The Flintstones Rock";

let frequency = {};

statement.split('').filter(letter => letter !== ' ').forEach(letter => {
  // if (frequency[letter]) {
  //   frequency[letter]++;
  // } else {
  //   frequency[letter] = 1;
  // }
  frequency[letter] ? frequency[letter]++ : frequency[letter] = 1;
});


console.log(frequency);