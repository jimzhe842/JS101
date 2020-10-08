let RANDOM_CHAR = '0123456789abcdef';
let HEX_LENGTH = 16;
let FORMAT = [8,4,4,4,12];

function certainLength(length) {
  let string = '';
  while (string.length < length) {
    string += RANDOM_CHAR[Math.floor(Math.random() * HEX_LENGTH)];
  }
  return string; // RANDOM_CHAR[Math.floor(Math.random() * length)].repeat(length);
}

function uuid() {
  let hexArr = FORMAT.map(length => certainLength(length));
  return hexArr.join('-');
}

console.log(uuid());
console.log(uuid());
console.log(uuid());
console.log(uuid());
console.log(uuid());