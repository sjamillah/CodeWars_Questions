function high(x) {
    // Given a string of words, you need to find the highest scoring word.
    // Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
    // For example, the score of abad is 8 (1 + 2 + 1 + 4).
    // You need to return the highest scoring word as a string.
    // If two words score the same, return the word that appears earliest in the original string.
    // All letters will be lowercase and all inputs will be valid.
    let words = x.toLowerCase().split(' '); //changes the string into lowercase and then splits it to a single word
    const wordScore = (word) => {
        return word.split('').reduce((sum, char) => sum + (char.charCodeAt(0) - 96), 0); //splits each word into single characters and then adds each character position using the unicode of the character
    }
    let highestScoringWord = '';
    let highestScore = 0;

    words.forEach((word) => {
        let score = wordScore(word);
        if(score > highestScore) {
            highestScore = score;
            highestScoringWord = word;
        }
    });
    return highestScoringWord;
}
console.log(high('man i need a taxi up to ubud'));
console.log(high('what time are we climbing up the volcano')); 
console.log(high('take me to semynak'));   
console.log(high('aa b'));
console.log(high('b aa'));
console.log(high('bb d'));
console.log(high('d bb'));
console.log(high('aaa b'));