function alphabetPosition(text) {
    /*function outputs the position of each letter in the text based on the aplhabetic order*/
    let lower_str = text.toLowerCase(); //changes to lowercase
    let check_str = lower_str.replace(/[^a-z]/g, ''); //checks if the characters are in the lowercase alphabetical order
    let split_str = check_str.split(''); //splits the characters into an array of characters
    //the result will use charCodeAt() to access the unicode of the character and the unicode of character at
    //index 0 is 97 which is 'a' for this case and it'll subtaract it with the unicode of the 'a' which is still 
    //97 and we'll add 1 to convert it the 0-based index to a 1-based index and returned as a new  array of results using map
    let result = split_str.map(char => char.charCodeAt(0) - 'a'.charCodeAt(0) + 1); 
    return result.join(' '); //returns the indexes of the letters with a space in the middle and as a string
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."));
console.log(alphabetPosition("The narwhal bacons at midnight."));