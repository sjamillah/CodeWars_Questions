function boolToWord(bool) {
    // returns yes or no if it's true or false respectively
    if (bool === true) {
        return "Yes";
    } else {
        return "No";
    }
}
console.log(boolToWord(true));
console.log(boolToWord(false));