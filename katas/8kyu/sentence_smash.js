function smash(words) {
    /* function takes a list of words and returns a sentence with spaces between the words but not the sides*/
    let str = words.join(' '); // adds spaces between the concatenated words
    return str;
}
console.log(smash(['hello', 'world', 'this', 'is', 'great']));