function createSum() {
    let sum = 0;
    
    return function (num) {
      return sum += num;
    };
  }
  
  let sum = createSum();