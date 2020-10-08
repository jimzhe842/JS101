let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let values = Object.values(obj);
let arr = [];

values.forEach(subObj => {
  if (subObj.type === 'fruit') {
    let colors = subObj.colors.map(color => color[0].toUpperCase() + color.slice(1));
    arr.push(colors);
  } else {
    let size = subObj.size.toUpperCase();
    arr.push(size);
  }
  
  
})

console.log(arr);