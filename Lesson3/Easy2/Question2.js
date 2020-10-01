let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

let numbers2 = [1, 2, 3, 4, 5];
let numbersReversed = numbers2.concat();
numbersReversed.reverse();
console.log(numbersReversed);

let numbersReversed2 = numbers2.concat();
numbersReversed2.sort((num1, num2) => num2 - num1);
console.log(numbersReversed2);

let reversed = [];
let length = numbers2.length;

numbers2.forEach(number => reversed[--length] = number);

console.log(reversed);