// function factorial(num) {
//     if (num === 0 || num === 1) {
//       return num;
//     }
//     return num * factorial(num - 1);
//   }
  
//   let n = factorial(8);
//   console.log(n); // 40320

//------------------------

//   function formatNumber(num) {
//     return num.toFixed(2);
//   }
  
//   formatNumber(2);

//-------------------------

// function longestString() {
//     let longest = "1,2,3,4,5,6,7,8,44,3,21,67,45,41,93,88";
//     for (let i = 0; i < arguments.length; i++) {
//       if (arguments[i].length > longest.length) {
//         longest = arguments[i];
//       }
//     }
//     return longest;
//   }
//   longestString();


//   function funcWithDefault(a = 55) {
//     arguments[0] = 99; // updating arguments[0] does not also update a
//     console.log(a);
//   }
//   funcWithDefault(10); // 10


  //-----------------------//

  // every feature-functionality will wrapped in a function.
// arrow function-function expression 
// max use of arrow function
// 1. array print
//2. find multiples in array calculatemultiples(array,num)
//3 calculate max
//4 calculate min
//5 calculate no of evens and odds
//6 check if element is present in array - find (array,element to be searched)
//7 flatten the array flatten(1,2,3,['abc','432']), -> result= [1,2,3,'abc','432']
//8 return index where an array occured
// additional:- print resultant array for 2,7 by calling function written in 1.

// for each,for off,  for in, 
/*
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
  

  let numbers = [1, 2, 3, 4, 5,6,7,8];
  let max = Math.max(...numbers);
  console.log(max);

  let min = Math.min(...numbers);
  console.log(min); */
/*
  function countEvenOdd(numbers) {
    let evenCount = 0;
    let oddCount = 0;
    
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
    
    return {
      even: evenCount,
      odd: oddCount
    };
  } */
  /* const numbers = [1, 2, 3, 4, 5, 6];
  const evenOddCounts = countEvenOdd(numbers);
  console.log(evenOddCounts);
  // Output: { even: 3, odd: 3 } */
    
  /* function find(array, element) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === element) {
        return true;
      }
    }
    return false;
  }
  const numbers = [1, 2, 3, 4, 5, 6];
  const result = find(numbers, 4);
  console.log(result);
  // Output: true  */
    
  //  function flatten(arr) {
  //   let result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (Array.isArray(arr[i])) {
  //       result = result.concat(flatten(arr[i]));
  //     } else {
  //       result.push(arr[i]);
  //     }
  //   }
  //   return result;
  // }
  // const mixedArray = [1, 2, 3, ['abc', '432']];
  // const result = flatten(mixedArray);
  // console.log(result);
  // Output: [1, 2, 3, 'abc', '432']  */

  function indexOf(array, element) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === element) {
        return i;
      }
    }
    return -1;
  }
  const numbers = [1, 2, 3, 4, 5, 6];
  const result = indexOf(numbers, 4);
  console.log(result);
  // Output: 3