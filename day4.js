/// while loop 

// condition -- start-stop 
// variable -- measure -- counter 
// bosy of loop 

let toffies= "qwerty";
let reversed_toffies="";
let count=toffies.length-1;
while (count>=0) {
    reversed_toffies+=toffies[count];

    if(toffies[count] == 'w'){
        break
    }
    count--;
}
console.log(reversed_toffies);

count=toffies.length-1;
reversed_toffies="";
while (count>=0) {
    let a = 1;
    reversed_toffies+=toffies[count];

    if(toffies[count] == 'w'){
        count--;
        continue
    }
    count--
}
// a = a+ 1;
// console.log(a = a+ 1);


// for loops
let our_data= [0,2,3,4,67,35,786];
let sum = 0;
// counter initialize; conditio; counter manage
for (let index = 0; index < our_data.length; index++) {
    //index = 0  // variable shadowing
    for (let index = 0; index < our_data.length; index++) {
        // index = 0
        if (our_data[index] % 2 != 0)
        {
            break
        }

        sum = sum + our_data[index];
    }
}

let numbers = "1234567890"
// for(let index = 0; index<numbers.length; index++){
//     let value = numbers[index]
// }

// for of loop
for (let letter of numbers) {
    if (letter % 2 == 0) {
        //even
    }
    console.log(letter);
}


