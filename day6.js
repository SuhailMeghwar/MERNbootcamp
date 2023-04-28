// let inputColor = 'blue';
// switch (inputColor){
//     case 'white':
//     console.log('the color is white');
//     break;
//     case 'green':
//     console.log('the color is green');
//     break;
//     case 'red':
//     console.log('the color is red');
//     break;
//     case 'blue':
//     console.log('the color is blue');
//     break;
//     default:
//     console.log('it is different color then defined');
// }

// let prompt=require (`prompt-sync`)();
// let number = Number(prompt('Please enter number in between 2 to 7 for week days from tuesday to sunday: '));
// console.log(number); 
// switch (number){
//     case 2:
//     console.log('it is Tuesday');
//     break;
//     case 3:
//     console.log('it is Wednesday');
//     break;
//     case 4:
//     console.log('it is Thursday');
//     break;
//     case 5:
//     console.log('it is Friday');
//     break;
//     case 6:
//     console.log('it is Saturday');
//     break;
//     case 7:
//     console.log('yahoo it is Sunday');
//     break;
//     default:
//     console.log('it is a bad Day');
// }
// let prompt=require (`prompt-sync`)();
// number1 = Number(prompt('Please enter number 1 : '));
// console.log(typeof number1, number1);
// number2 = Number(prompt('Please enter number 2 : '));
// console.log(typeof number2, number2);
// let operation = prompt('Please enter operation you want to perform from +,-,*,/ : ');


// function addValue() {
//     sum= number1+number2;
//     console.log("the sum value is "+ sum);
// }

// function subValue() {
//     let sub= number1-number2;
//     console.log("the subtracted value is "+ sub);
// }


// function mulValue() {
//     let mul= number1*number2;
//     console.log("the multiplied value is "+ mul);
// }

// function divValue() {
//     let div= number1/number2;
//     console.log("the divided value is "+ div);
// }


// switch(operation){
// case '+':
//     addValue();
//     break;
// case '-':
//     subValue();
//     break;
// case '*':
//     mulValue();
//     break;
// case '/':
//     divValue();
//     break;
// default:
// console.log('the operation is invalid');
// }



// function addValue(num1, num2) {
//     if(num1==undefined){
//      sum = num2+1;
//     return sum;
// }
//     else if(num2==undefined){
//         sum= 1+num1;
//         return sum;
//     }
//     else {
//         sum= num1+num2;
//         return {sum, num1, num2};
//     }
// }

// let sumvalue = addValue(number1,number2);
// console.log(sumvalue);
// console.log(sumvalue.sum);
// console.log("the sum value is " + sumvalue);



// function login(email, name, password) {
//     email="suhail@gmail.com"
//     name="suhail"
//     password="789456"
//     return ;
// }





function loginValidator(email,password){
    let emailFormat=  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let emailResult="";
    if(email.match(emailFormat)){
        emailResult="valid email"
    }else{
        emailResult="Invalid Email"
    }
    return emailResult
}

console.log(loginValidator("waliullahsfsdfa18fsda@Z5.sdlfjdskl"));



