const vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
let inputString = "I am a person";
let outputArray = [];
//let outputString = "Vowels in input: ";

for(let i = 0; i < inputString.length; i++)
{
    if(vowel.includes(inputString[i]))
    {
        if(outputArray.includes(inputString[i]))
        {
            continue;
        }
        else{
            outputArray.push(inputString[i]);
        }
    }
    else{
        continue;
    }
}
console.log("Input: " + inputString);
console.log("Output: " + outputArray);



let static_string = "abcderfgr";
let vowels = ['a','e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
let anwser=[];
let count_vowels = 0;


let findVowels = (string)=>{ //using Multiple loops
    string.split('').forEach(word => {
        // ((word == 'a' || word == 'A') || (word == 'e' || word == 'E') || (word == 'i' || word == 'I') || (word == 'o' || word == 'O'))
        vowels.forEach(vowel => {
            (word == vowel) ? (anwser.push(word), count_vowels++) : null;
        });
    });
}





/**
 * solving problem by using sinle loop and use of indexOf() 
 * @function indexOf('value')
 */
let findVowel = (string)=>{ //using 1 loop
    string.split('').forEach(word => {
        (vowels.indexOf(word) != '-1') ?  (anwser.push(word), count_vowels++) : null ;
    });
}

findVowel(static_string);
console.log(anwser, count_vowels);