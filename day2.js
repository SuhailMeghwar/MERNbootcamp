//    Simple Array Print---------
// let array1=[1,2,3,4,5,3,4,2,6];
// let add=(...array1)=>{
//     for(let i=0;i<=array1.length;i++){
//         console.log(array1[i]);
//     }
// }
// console.log(add(...array1));

////////////////

//Max Array--------

// let array2=[1,2,3,4,5,3,4,2,6,33];
// let max=array2[0];
// array2.forEach(element => {
//     if(element>max){
//         max=element;
//     }
    
// });
// console.log(max);

//////////////

// Min Array-----------

// let array2=[1,2,3,4,5,3,4,2,6,33];
// let min=array2[0];
// array2.forEach(element1 => {
//     if(element1<min){
//         min=element1;
//     }
    
// });
// console.log(min);

// even Number

// let array4=[1,2,3,4,5,6,7,8,9];
// let even=array4[0];
// array4.forEach(element2 => {
//     if(element2%2==0){
//         even=element2;
//         console.log(even);
//     }
// });

// Odd number

// let array5=[1,2,3,4,5,6,7,8,9];
// let odd=array5[0];
// array5.forEach(element2 => {
//     if(element2%2==1){
//         odd=element2;
//         console.log(odd);
//     }
// });

let arr=[1,2,3,2,2,2,4,5];

let findElement=(arr)=>{
    let count=0;
    for (let number of arr) {
        if(number==2){
            console.log('number is matched');
            count++;
        }

    }
    return `count of matched number is ${count} matched`
}
console.log(findElement(arr));