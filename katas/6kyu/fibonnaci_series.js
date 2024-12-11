function fib(steps) {
    /*
    fibonnaci series is a series where we add two previous numbers to give us the next number
    Fibonacci number (Fibonacci sequence), named after mathematician Fibonacci, is a sequence of numbers that looks like this:
    0, 1, 1, 2, 3, 5, 8, 13,...
    You get first two starting numbers, 0 and 1, and the next number in the sequence is always the sum of the previous two numbers. Fibonacci introduced it in 1202, in his book Liber Abaci.
    So what will be your task? You should write a function fib, that takes one parameter steps, and returns a number from the Fibonacci sequence, based on the parameter steps, which determines the position in Fibonacci number.
    For example fib(0) returns 0, fib(4) returns 3, fib(15) returns 610.
    */
    if (steps <= 0) return 0; // Handle case where steps are 0 or negative
    if (steps === 1) return 1; // The 1st Fibonacci number is 1
    if (steps === 2) return 1; // The 2nd Fibonacci number is 1
   let fibNum = [0, 1]; //the first two numbers of the series
   for(let i = 2; i <= steps; i++) {
    // begins at i = 2 (the third number in the sequence) and runs until i is less than steps.
    fibNum.push(fibNum[i - 1] + fibNum[i - 2]); //then we push the addition of the previous and next element to the array
   }
   return fibNum[steps]; // Return the Fibonacci number at the desired position
}
console.log(fib(0));
console.log(fib(4));
console.log(fib(15));