function grow(x) {
    /*multiplies elements in the array*/
    let result = x.reduce((a, b) => a * b);
    return result;
}
console.log(grow([1, 2, 3, 4, 5]));