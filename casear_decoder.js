let alphabet = "abcdefghijklmnopqrstuvwxyz";
// let cipher = "yvsr vf gbb fubeg gb or frevbhf nyy gur gvzr";
let cipher = "apobxbundefinedhp";


for (let key = 1; key <= 25; key++) {
    let decoded = "";
    for (let letter of cipher) {
        if (! alphabet.includes(letter)){
            decoded += letter
            continue
        }
        position = (alphabet.indexOf(letter) - key+26) % 26;
        decoded += alphabet[position];
    }
    console.log(`KEY: ${key}  decrypted text: ${decoded}`);
}