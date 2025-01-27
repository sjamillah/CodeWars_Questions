function rot13(message) {
    /* 
    N.B: The Rot is a Cipher translation were the letters would be replaced by a new letter in another position in the alphabet position
    It was a way to communicate a message by Caesar to the military so replace the letter with the number of times they would tell you to replace.

    Ex: If they say replace it with 3 letters then A would be D and so on.

    ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters 
    after it in the alphabet. ROT13 is an example of the Caesar cipher.

    Create a function that takes a string and returns the string ciphered with Rot13. 
    If there are numbers or special characters included in the string, they should be returned as they are. 
    Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
    */
    let newStr = message.replace(/[a-zA-z]/gi, (char) => {
        const charCode = char.charCodeAt(0); //gets the ASCII code of the character
        if(char >= 'A' && char <= 'Z') {
            //checks if the letter is from A to Z and then takes the unicode of the character and subtracts it from its unicode value to get the 
            // position of the letter in the alphabet it then adds 13 to it which is the 13 letters we should add for the hidden message
            // then it adds a modulus of 26 i.e The % operator (modulus) ensures the result "wraps around" the alphabet.
            // If the value goes beyond 25 (the last index of the alphabet), it wraps back to the beginning.
            // Example: If you shift 'Z' (25) by 13, 25 + 13 = 38, and 38 % 26 = 12, which corresponds to 'M'.
            //It then takes the shifted value and adds 65 to it to get the char at that unicode value
            //then string(character) is then displayed
            return String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
        }
        if(char >= 'a' && char <= 'z') {
            //checks if the letter is from A to Z and then takes the unicode of the character and subtracts it from its unicode value to get the 
            // position of the letter in the alphabet it then adds 13 to it which is the 13 letters we should add for the hidden message
            // then it adds a modulus of 26 i.e The % operator (modulus) ensures the result "wraps around" the alphabet.
            // If the value goes beyond 25 (the last index of the alphabet), it wraps back to the beginning.
            // Example: If you shift 'Z' (25) by 13, 25 + 13 = 38, and 38 % 26 = 12, which corresponds to 'M'.
            //It then takes the shifted value and adds 65 to it to get the char at that unicode value
            //then string(character) is then displayed 
            return String.fromCharCode(((charCode - 97 + 13) % 26) + 97);
        }
        return char; //explictly returns the characters that are symbols or numbers as they don't need the condition
    });
    return newStr; //returns the final message
}
console.log(rot13('hello'));
console.log(rot13('HELLO'));
console.log(rot13('Welcome to our beloved country!!!222'));