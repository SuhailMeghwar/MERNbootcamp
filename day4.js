//forloop
//counter initialize;condition;countermanage
// let our_data="querty";
// for(let index=0;index<our_data.length;index++){

// }
//aik arry h  us ka even number ka sum krna h
// let valu=[1,2,3,4,5,6,7,8,9];

// for(let i=0;i<=valu.length;i++){
//     let sum=1;
// console.log(i);
// if (valu[i]%2==0){
// sum=sum+valu[i];
// }
// console.log(sum);
// }
// vaariable shdowing
//for of loop?
// string will be uppercase
// key will be +2,+5
// program should return decrypted text
// let string_Alpha="abcdefghijklmnop";
// let name1="adilAli";
// let char="";
// for(let newval of name1){
//     for(let i=0;i<string_Alpha.length;i++){
//         if(newval==string_Alpha[i]){
//          char +=string_Alpha[i + 5] ;
//         }
// }
// }
// console.log(char)
let  string_val='abcdefghijklmnopqrstuvwxyz';
let nameSt="adilaliz";
let cypher="";
for(let newVal of nameSt){
    for(let i=0;i<string_val.length;i++){
        if(newVal==string_val[i]){
cypher+=string_val[i+5];

        }
    }
}
console.log(cypher);


let 