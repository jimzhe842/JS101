let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let sortedArr = arr.map(subArr => {
  if (typeof subArr[0] === "number") {
    return subArr.slice().sort((a,b) => Number(a) - Number(b));
  } else {
    return subArr.slice().sort((a,b) => {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    })
  }
})

console.log(sortedArr);