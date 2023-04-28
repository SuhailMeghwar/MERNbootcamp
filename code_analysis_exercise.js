let numArray=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

for(let index= 0; index<numArray.length; index++){
    if (numArray[index]%3==0){
        if((numArray[index])%5==0){
            console.log('FIZZBUZZ'); 
            continue;
        }
        console.log('FIZZ');
    }
    else if(numArray[index]%5==0){
        console.log('BUZZ');
    }
    else {
        console.log(numArray[index])
    }
}