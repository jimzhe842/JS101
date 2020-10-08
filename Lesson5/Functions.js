[[1, 2], [3, 4]].map(arr => {
  console.log(arr[0]);
  return arr[0];
});

// Action: map, callback execution, element access, method call console.log, element reference
// Performed on:
// Side effect:
// Return Value:
// Is Return Value Used?:

let myArr = [[18, 7], [3, 12]].forEach(arr => {
  return arr.map(num => {
    if (num > 5) {
      return console.log(num);
    }
  });
});

[[1, 2], [3, 4]].map(arr => {
  return arr.map(num => num * 2);
});