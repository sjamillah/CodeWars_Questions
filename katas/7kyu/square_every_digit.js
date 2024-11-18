function squareDigits(num){
    /*function that powers an individual number from a number(int) and returns the result as an integer*/
    let digits = num.toString().split(''); //changes the number to a string and splits it
    let squared = digits.map(digit => Math.pow(Number(digit), 2)).join(''); //creates a new array for each and powers each individual element then joins it
    return Number(squared); //returns the result as an integer
}
console.log(squareDigits(9414));
console.log(squareDigits(4114));
console.log(squareDigits(0));