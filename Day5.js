// for of loop ellement return kry ga
// do while loop
// let num=[1,2,3,4,5,6,7,8,9,10];
// for(let value of num){
//     console.log(value);
// // }
// let data={
//     name:"adil ali",
//     age:15,salary:30000
// }

// // for in loop key return kry ga 
//  for(let num in data){
//     console.log(num);
// }
// ///////////////
// let num=[1,2,3,4,5,6,7,8,9,10];
// for(let value in num){
//     console.log(value);
// }

// let num=[1,2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,18,19,20]
// for(let i=0; i<num.length; i++) {
//     if((num[i]%3==0)&&(num[i]%5==0)) {
//         console.log("FizzBuzz");
//     }
//     else if(num[i]%3==0){
//         console.log("Fizz");
//     }
//     else if(num[i]%5==0){
//         console.log("Buzz");
//     }
//     else{
//         console.log (num[i]);
//     }
// }


/////////////////////////////////////////
// encryptor?
//indexof?  The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// include();

// let alphabet='abcdefghijklmnopqrstuvwxyz';
// let plain_txt ="adilali"
//  let key=1;
// let encoded ="";
// for(let letter of plain_txt){
//    let  position=(alphabet.indexOf(letter) + key+26)%26 ;
   
//     encoded +=alphabet[position];


// }
// console.log(`'encrypted text:'${encoded}`);

// let namestf="pakistan";
// console.log(namestf.indexOf('t'));
let strings="abcdefghijklmnopqrstuvwxyz";
let word="wasif";
let cypher="";
let key=2;
let position;
for(let nm of word) {


        position=(strings.indexOf(nm)+key+26)%26;
        cypher+=strings[position];


    
}
console.log(cypher);