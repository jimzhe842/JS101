let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let newArr = arr.map(obj => {
  let entries = Object.entries(obj);
  let newObj = {};
  entries.forEach(entry => {
    let key = entry[0];
    let value = entry[1] + 1;
    newObj[key] = value;
  })
  return newObj;
})

console.log(newArr);