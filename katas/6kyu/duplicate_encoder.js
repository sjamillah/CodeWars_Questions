function duplicateEncode(word) {
    // input: a string
    // convert a string to a new string
    // character appears once we replaced by '('
    // character appears more than once replaced by ')'
    // ignore capitalization
    // output: new string replaced by () respectively
    // check how many times an element occurs in the string
    let lower = word.toLowerCase(); //coneverts it to lowercase
    // split it to an array of elements and then check if the previous char is equal to the next
    // replaces the elements N.B: _ is a way to ignore the index of the char
    let ans = lower.split('')
                    .map((el, _, arr) => arr.indexOf(el) === arr.lastIndexOf(el) ? '(' : ')');
    return ans.join(''); // makes it a string again
}
console.log(duplicateEncode('din'));
console.log(duplicateEncode('recede'));
console.log(duplicateEncode('Success'));