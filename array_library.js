// every feature - functioanlity will wrapped in a function.
// arrow functions - function expression
// use suitable loops (for..of, for..in)
// 1. array print 
// 2. find multiples in array calculateMultiples(array,7)
// 3. claculate max 
// 5. count no of even and odds
// 6. check if element is present in an array - find(array, element_to_be_searched)
// 7. flatten the array flatten([1,2,3,['abc', '432']]) -> result = [1,2,3,'abc','432']
//.8. return index where an element occured

// Additinal :- print resultant arrays for 2, 7 by calling fucntion written in 1.

let sum = (a,b) => a+b;

module.exports = {sum, display}

export{sum}

let display = (input_arr)=>{
    for (let value of input_arr){
        console.log(value);
    }
};

let consice_diplay = input_arr => input_arr.forEach(element => console.log(element));

let claculateMax = (...input_arr) => {
    let temp = input_arr[0];
    input_arr.forEach(value =>{
        if (temp< value) temp = value
        // (temp<value) ? temp = value : temp = temp
    });
    return temp;
};

let findMultiples = (input_arr, factor) => {
    let results = []
    input_arr.forEach(value => {
        (value%factor == 0) ? results.push(value) : null
    });
    return results;
}


let falttenArray = input_arr =>{
    let flattenedArray = [];

    input_arr.forEach(value => {
        if (typeof value == "object") {
            value.forEach(nested_value => {
                flattenedArray.push(nested_value);
            });
        }
        else  flattenedArray.push(value)
    });
    return flattenedArray;
}

// recursive approach for array flattening
function flattenArray(arr) { arr = [45,65,89]
    let result = []
    for (let element of arr) {
        if (typeof (element) == "object") {
            let partial = flattenArray(element);
            partial.forEach(value => {
                result.push(value)
            });
        }
        else result.push(element);
    }
    return result;}

console.log(flattenArray([1, 34, [45, 65, 89]]))

display([1,2,3,4,'adfdfd'])