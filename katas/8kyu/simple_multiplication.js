function simpleMultiplication(number) {
    /*
    function multiplies a number by 8 if the number is even otherwise it multiplies it by 9
    */
   if(number % 2 === 0) {
    return number * 8;
   } else {
    return number * 9;
   }
}
console.log(simpleMultiplication(11));
console.log(simpleMultiplication(10));
console.log(simpleMultiplication(1));