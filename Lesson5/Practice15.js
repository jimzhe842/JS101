let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let newArr = arr.map(obj => {
  let newObj = {};
  let keys = Object.keys(obj);
  keys.forEach(key => {
    newObj[key] = obj[key].filter(number => number % 2 === 0);
  })

  return newObj;

})

console.log(newArr);
