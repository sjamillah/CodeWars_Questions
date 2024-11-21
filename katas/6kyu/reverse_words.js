function reverseWords(str) {
    /* function that accepts a string and reverses each word in the string and all the spaces should be retained*/
    let words = str.split(' ');
    let reversed = words.map(word => word.split('').reverse().join(''));
    let result = reversed.join(' ');
    return result;
}
console.log(reverseWords("This is an example!"));
console.log(reverseWords("double  spaces"));