function calculateMultiples(array, num) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] % num === 0) {
        result.push(array[i]);
      }
    }
    return result;
  }
  
  let array = [1, 2, 3, 5, 5, 6, 7, 8];
  let num = 5;
  let result = calculateMultiples(array, num);
  console.log(result);