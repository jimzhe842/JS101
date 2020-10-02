let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let arr = Object.values(ages);

let minAge = arr.reduce((minAge, currentAge) => currentAge < minAge ? currentAge : minAge, Infinity);
console.log(minAge);