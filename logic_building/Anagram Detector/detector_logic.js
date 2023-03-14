function checkAnagram() {
    const word1 = document.getElementById('word1').value.toLowerCase();
    const word2 = document.getElementById('word2').value.toLowerCase();

    if (word1.length !== word2.length) {
        document.getElementById('result').innerHTML = 'Not anagrams';
        return;
    }

    const letters = {};

    for (let i = 0; i < word1.length; i++) {
        const letter = word1[i];
        letters[letter] ? letters[letter] += 1 : letters[letter] = 1;
    }

    for (let i = 0; i < word2.length; i++) {
        const letter = word2[i];
        if (!letters[letter]) {
            document.getElementById('result').innerHTML = 'Not anagrams';
            return;
        }
        letters[letter] -= 1;
    }
    document.getElementById('result').innerHTML = 'Anagrams!';
}