function addBinary(a, b) {
    /* adds numbers and returns them as binary*/
    let sum = a + b;
    let result = sum.toString(2);
    return result;
}
console.log(addBinary(1, 2));
console.log(addBinary(17, 98));