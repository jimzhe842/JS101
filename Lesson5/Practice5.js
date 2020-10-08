let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let munstersArr = Object.keys(munsters);
console.log(munstersArr.filter(name => munsters[name].gender === 'male').reduce((sum,name) => sum + munsters[name].age,0));

// let maleMunsters = munstersArr.filter(name => munsters[name].gender === 'male');
// console.log(maleMunsters);

// let sum = maleMunsters.reduce((sum,name) => {
//   console.log("age: " ,munsters[name].age);
//   return Number(sum) + Number(munsters[name].age);
// },0);

// console.log(sum);