let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let newArr = arr.map(subArr => {
  return subArr.filter(number => {
    return number % 3 === 0;
  });
});


console.log(newArr);