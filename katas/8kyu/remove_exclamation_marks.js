function removeExclamationMarks(s) {
    /* removes all the exclamation marks in a string*/
    let result = s.replace(/!/g, '');
    return result;
}
console.log(removeExclamationMarks("!Hello World!!!"));