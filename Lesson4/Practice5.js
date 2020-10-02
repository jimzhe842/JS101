[1, 2, 3].every(num => {
  return num = num * 2;
});

// The callback's return value is the result of the expression num * 2;
// every should return true;