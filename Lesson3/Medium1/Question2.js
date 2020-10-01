let munstersDescription = "The Munsters are creepy and spooky.";

let strings = [];

munstersDescription.split('').forEach((value) => {
  if (value === value.toUpperCase()) {
    strings.push(value.toLowerCase());
  } else {
    strings.push(value.toUpperCase());
  }
})

console.log(strings.join(''));