let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let arr = Object.values(ages);

let sum = arr.reduce((sum,currentAge) => sum + currentAge);
console.log(sum);