let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let values = Object.values(obj);

values.forEach(arr => {
  arr.forEach(string => {
    string.split('').forEach(letter => {
      if (['a','e','i','o','u'].includes(letter)) console.log(letter);
    })
  })
})

// You could just do 'aeiou';