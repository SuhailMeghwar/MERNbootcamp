// for .. of loop 
// 
let numbers = [2,4,6,786];

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }


for (let number of numbers) {
    let index = numbers.includes(number)

    // -1 
}

// for ..in loop
// JSON
let student_object = {
    'name' : 'some good name',
     'age' : 12,
}

for (let key in student_object) {
    if(key == 'age')
    {
   value  =  student_object[key]}
}

for (let index = 0; index < 2; index++) {
    student_object ["somekey"] = "dsfdsfdsfds"
    
}

let counter = 1
do {
    console.log("i will print no matter what you do")
    counter++
} while (counter< 2);

// encryptor
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let plain_text = "mjgfajtauppatipsuaupacfatfsjpvtabmmauifaujnf";


key = 1;
let encoded = "";
for (let letter of plain_text) {

    if (alphabet.indexOf(letter) == -1) {
        encoded += letter;
        continue
    }

    if (alphabet.includes(letter)) {
        encoded += letter
        continue
    }
  
    positions = (alphabet.indexOf(letter)+- key+26) % 26;
    encoded += alphabet[position];
}
console.log(`encrypted text: ${encoded}`);

dfdsffldsjflkds


