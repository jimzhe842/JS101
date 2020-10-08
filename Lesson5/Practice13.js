let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

function sumOdds(arr) {
  return arr.filter(number => number % 2 === 1).reduce((sum,value) => sum + value, 0);
}

// console.log(sumOdds([1,6,7]));


arr.sort((a,b) => sumOdds(a) - sumOdds(b));

console.log(arr);