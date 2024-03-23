const count = (a, b) => {
  let i;
  let j;
  for (i = 0; i < a.length; i++) {
    for (j = 0; j < a.length; j++) {
      if (i !== j && a[i] + a[j] === b) {
        console.log([i, j]);
        return;
      }
    }
  }
};

count([2, 3, , 4, 5], 9);
