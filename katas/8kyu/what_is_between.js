function between(a, b) {
    /* 
    Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
    For example:
    a = 1
    b = 4
    --> [1, 2, 3, 4]
    */
   let arr = []; //initialize any empty array
   for(let i = a; i <= b; i++) {
    //sets the first element to be a and then i represents the numbers in the middle and then outputs b also
    arr.push(i); //adds the elements to the array
   }
   return arr;
}
console.log(between(1, 5));
console.log(between(3, 9));