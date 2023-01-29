// let n=10
// while(n>0){
//     console.log("you are expert");
//     --n;
// }
////////////////////////////////////////////////////////////////////////
// const prompt=require("prompt-sync")();
// let i=1;
// let num=prompt("please enter any  number");
// while(i<num){
//     console.log("::your value is printed and loop is repeatedly execute that   either condition is true")
//     ++num
// }
// const prompt=require("prompt-sync")();
//  let num =prompt("Enter a number: ");
// i = 1
// while (i<= num){
//     console.log(i);
//     i += 1
// }
// const prompt=require('prompt-sync')();
//     let i=1;
//     // let num =prompt('enter a number');
//    while(i<=100){
//     if(i%2==0){

//     console.log(i);
//     }
// else{
//     console.log(i,'number is odd');
// }
// ++i;
//    }
// ////////////////////////////////////////////////
// const prompt=require('prompt-sync')();
// // i=100;
// // let num=prompt('number');
// // while(i>num){
// //     console.log(i);
// //     --i;
// // }
// let nameStd=["adil","ali","pakist","lahore"];
// // console.log(nameStd);
// // console.log(nameStd.pop());
// // nameStd.push("india");
// // console.log(nameStd.push("asdfffffff"));
// // console.log(nameStd);
// // console.log(nameStd.splice(1,3));
// console.log(nameStd.sort());
// console.log(nameStd.reverse());

// const car={
//     color:"blue",
//     price:"3M",
//     made:2013,
// }
// console.log(car);
// document.getElementById("txt").textContent="welcme to new "
// let a=[1,6,3,4,5,2];
// // console.log(a);
// // console.log(a.pop());
// // // console.log(a.push("pakistan"));
// // console.log(a.push("pakistan"));
// // console.log(a.splice(1,5));
// // console.log(a.sort());
// encryption
let string="abcdefghijklmnopqrstuvwxyz";
let nameSt="adilali"
let cypher="";
for (let newVal of nameSt){
    console.log(newVal);
    for(let i=0; i<string.length; i++){
if(newVal==string[i]){
cypher=cypher+string[i+5]
    // cypher+=string_val[i+5];
}
    }

}
console.log(cypher);