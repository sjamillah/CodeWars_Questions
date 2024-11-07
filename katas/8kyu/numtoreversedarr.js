function digitize(n) {
    // function that converts a number to a reversed array of digits.
    let str = n.toString().split(''); //converts number to string and splits it
    let reversed = str.reverse(); //reverses string elements
    let result = reversed.map(Number); //creates a new array using map and changes back to a number datatype
    return result;
}
console.log(digitize(678990));