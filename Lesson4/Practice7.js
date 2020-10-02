['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

// The return value of map is [undefined, 'bear'];