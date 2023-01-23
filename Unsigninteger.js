function counting(n) {
    let count = 0;
    for (let i = 0; i < 8; i++) {
      if (n[i] === '1') {
        count++;
      }
    }
    return count;
  }
  console.log(counting("10101011"));