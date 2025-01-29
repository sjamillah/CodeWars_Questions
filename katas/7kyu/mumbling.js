function accum(s) {
    /*
    This time no story, no theory. The examples below show you how to write function accum:

    Examples:
    accum("abcd") -> "A-Bb-Ccc-Dddd"
    accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
    accum("cwAt") -> "C-Ww-Aaa-Tttt"
    The parameter of accum is a string which includes only letters from a..z and A..Z.
    */
    //we have to split the string to an array, and then change the first element of the string to uppercase and the rest lowercase and then they repeat it
    let arr = s.split('').map((el, index) => el.toUpperCase() + el.toLowerCase().repeat(index));
    return arr.join('-'); //changes the array to a string with a '-' in the middle
}
console.log(accum('ASIOJNK'));
console.log(accum('hyuinnkj'));