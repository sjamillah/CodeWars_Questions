function persistence(num) {
    /*
    function persistence takes in a positive number and returns its multiplicative persisitence
    which is the number of times you must multply the digits in num until you reach a single digit.
    examples:
    39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
    999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
    4 --> 0 (because 4 is already a one-digit number, there is no multiplication)
    */
   let count = 0; //we set the counter to 0 as it'll be used to store the number of times a number is multiplied to reach one digit
   while(num >= 10){
    let digits = num.toString().split('').map(Number); //changes the number inputed to a string, splits it and the changes it to an array list of a number
    let product = 1; //sets the product to 1 just in case the number is one digit
    for(let i = 0; i < digits.length; i++) {
        product *= digits[i]; //multiplies the two numbers in the digits array list
    }
    num = product; //sets the number to the product and if they're two numbers they'll be multiplied again
    count++; //increments the counter if the number is one digit
   }
   return count; //returns the total number of times a number is multiplied to reach one digit
}
console.log(persistence(39));
console.log(persistence(0));
console.log(persistence(25));
console.log(persistence(999));