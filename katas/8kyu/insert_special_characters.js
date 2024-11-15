function insertSpecialCharacter(sentence, char) {
    const words = sentence.split(' ');
    const result = words.join(' ')
                        .replace(/(\b\w+\b\s+\b\w+\b\s+\b\w+\b)/g, `$1${char}`); //uses regex to insert a special character after three words in a sentence
    return result.trim(); // trim to clean up any trailing special characters or whitespace
}
const sentence = "I have a sentence that requires some special characters";
const char = "&";
console.log(insertSpecialCharacter(sentence, char));